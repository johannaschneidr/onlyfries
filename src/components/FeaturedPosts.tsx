import PostCard from './PostCard'

const FeaturedPosts = () => {
  const posts = [
    {
      location: 'Jolene',
      image: '/images/fries1.jpg', // You'll need to add these images to your public/images directory
      rating: 7.6,
      title: 'Home Fries',
      tags: ['Not Potato', 'Classic'],
      href: '/posts/home-fries'
    },
    {
      location: 'Downtown Diner',
      image: '/images/fries2.jpg',
      rating: 8.2,
      title: 'Crispy Waffle Fries',
      tags: ['Crispy', 'Seasoned'],
      href: '/posts/waffle-fries'
    },
    {
      location: 'Food Truck',
      image: '/images/fries3.jpg',
      rating: 9.0,
      title: 'Loaded Street Fries',
      tags: ['Loaded', 'Spicy'],
      href: '/posts/street-fries'
    },
    {
      location: 'Jolene',
      image: '/images/fries4.jpg',
      rating: 9.0,
      title: 'Loaded Fries',
      tags: ['Fries', 'Spicy'],
      href: '/posts/jolene-fries'
    }
  ]
  
  return (
    <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              location={post.location}
              image={post.image}
              rating={post.rating}
              title={post.title}
              tags={post.tags}
              href={post.href}
            />
          ))}
        </div>
      </main>
  )
}

export default FeaturedPosts 