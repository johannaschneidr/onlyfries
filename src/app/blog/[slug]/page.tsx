import { getBlogPost, getBlogPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { format } from 'date-fns'
import RootLayout from '@/components/RootLayout'
import { Metadata } from 'next'

// ✅ Correctly await params in BlogPostPage
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // 🚨 Await params directly
  const resolvedParams = await params // Ensure params is fully resolved

  console.log("📌 Resolved Params type:", typeof resolvedParams);
  console.log("📌 Resolved Params content:", resolvedParams);

  if (!resolvedParams?.slug) {
    return <RootLayout><p>Blog post not found.</p></RootLayout>
  }

  const post = await getBlogPost(resolvedParams.slug)

  return (
    <RootLayout>
      <article className="section-padding">
        <div className="container-width max-w-4xl">
          <h1>{post.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
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
