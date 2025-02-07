import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { format } from 'date-fns'
import RootLayout from '@/components/RootLayout'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
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