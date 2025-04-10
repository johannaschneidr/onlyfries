export default async function BlogPostPage({ 
  params,
}: {
  params: { slug: string }
}) {

  return (
    <article className="section-padding">
      <div className="container-width max-w-4xl">
        {/* ... rest of your blog post content ... */}
      </div>
    </article>
  )
} 