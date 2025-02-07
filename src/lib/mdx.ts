import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogMeta } from '@/types/blog'

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog')

export function getBlogPosts(): BlogMeta[] {
  const files = fs.readdirSync(POSTS_PATH)
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.mdx', ''),
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        image: data.image,
        tags: data.tags,
        readingTime: readingTime(content).text,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    image: data.image,
    tags: data.tags,
    readingTime: readingTime(content).text,
    content,
  }
} 