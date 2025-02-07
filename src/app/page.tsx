import Hero from '@/components/Hero'
import Blog from '@/components/Blog'
import RootLayout from '@/components/RootLayout'
import { getBlogPosts } from '@/lib/mdx'

export default function Home() {
  const posts = getBlogPosts()

  return (
    <RootLayout>
      <Hero />
      <Blog posts={posts} />
    </RootLayout>
  )
}

