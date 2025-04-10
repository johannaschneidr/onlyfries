const Hero = () => {
  return (
    <header className="section-padding bg-white relative overflow-hidden">
      <div className="container-width text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight">
          Your favorite type of{' '}
          <span className="text-[#FFB800] italic font-script">(food)</span>
          {' '}porn
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          OnlyFries is a trusted resource for every fries lover. No matter if you are looking
          for a spontaneous snack or a carb-heavy meal for a special occasion, we are
          committed to delivering high-quality content to satisfy your every desire.
        </p>
      </div>
    </header>
  )
}

export default Hero 