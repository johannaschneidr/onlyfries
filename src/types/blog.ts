export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image: string
  tags: string[]
  readingTime: string
  content: string
}

export type BlogMeta = Omit<BlogPost, 'content'> 