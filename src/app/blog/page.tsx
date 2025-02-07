import { getBlogPosts } from '@/lib/mdx'
import Link from 'next/link'
import Image from 'next/image'
import RootLayout from '@/components/RootLayout'

export default async function BlogPage() {
  const posts = getBlogPosts()

  return (
    <RootLayout>
      <main className="section-padding">
        <div className="container-width">
          <h1>Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="card group"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </RootLayout>
  )
} 