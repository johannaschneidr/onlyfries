import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { format } from 'date-fns'
import RootLayout from '@/components/RootLayout'
import { Metadata } from 'next'

type Props = {
  params: { slug?: string } // ⬅️ Make slug optional to reflect possible undefined value
}

// ✅ Corrected function signature and added type check
export async function generateMetadata({ params }: { params: { slug?: string } }): Promise<Metadata> {
  if (!params.slug) {
    return {
      title: 'Blog Post Not Found',
      description: 'This blog post does not exist.',
    }
  }

  const post = await getBlogPost(params.slug)
  
  return {
    title: post.title,
    description: post.description,
  }
}

// ✅ Ensure generateStaticParams correctly handles async function
export async function generateStaticParams() {
  const posts = await getBlogPosts() // ⬅️ Add await if getBlogPosts() is async
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// ✅ Explicitly check for params.slug to avoid undefined errors
export default async function BlogPostPage({ params }: Props) {
  if (!params.slug) {
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