import Image from 'next/image'
import Link from 'next/link'

interface PostCardProps {
  location: string
  image: string
  rating: number
  title: string
  tags: string[]
  href: string
}

export default function PostCard({ location, image, rating, title, tags, href }: PostCardProps) {
  return (
    <Link href={href} className="block">
      <article className="bg-white overflow-hidden border-2 border-black transition-all duration-200 hover:shadow-lg">
        {/* Header with location and arrow */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#FFE4B0]">
          <span className="font-sans text-gray-800">{location}</span>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Image container with rating */}
        <div className="relative border-y-2 border-black p-3">
          <div className="relative w-full h-44">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg object-cover"
            />
            <div className="absolute top-2 right-2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <span className="font-sans font-bold text-gray-800">{rating}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-[#FFE4B0] px-3 py-1 text-sm font-medium text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
