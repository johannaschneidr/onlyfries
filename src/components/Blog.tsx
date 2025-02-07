'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BlogMeta } from '@/types/blog'

const Blog = ({ posts }: { posts: BlogMeta[] }) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <h2>Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card group"
            >
              <div className="relative h-64">
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 z-10">
                  <span className="rating-badge">7.6</span>
                </div>
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3>{post.title}</h3>
                  <span className="author-credit">{post.author}</span>
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog 