import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { format } from 'date-fns'
import RootLayout from '@/components/RootLayout'
import { Metadata } from 'next'

type BlogPageProps = {
  params: { slug: string } // ❌ Do NOT use optional "?" here
}

// ✅ Fix: Ensure correct function signature without promises
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  return {
    title: post.title,
    description: post.description,
  }
}

// ✅ Fix: Ensure correct return type in `generateStaticParams`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// ✅ Fix: Ensure `params` is a plain object
export default async function BlogPostPage({ params }: BlogPageProps) {
  if (!params || !params.slug) {
    return <RootLayout><p>Error: Blog post not found.</p></RootLayout>
  }

  const post = await getBlogPost(params.slug)

  return (
    <RootLayout>
      <article className="section-padding">
        <div className="container-width max-w-4xl">
          <div className="mb-8">
            <h1>{post.title}</h1>
            <div className="flex items-center gap-4 mt-4 text-gray-600">
              <span>{post.author}</span>
              <span>•</span>
              <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="relative h-96 mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </RootLayout>
  )
}