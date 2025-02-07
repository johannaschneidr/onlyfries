'use client'

import Link from 'next/link'
import Image from 'next/image'
import { images } from '@/assets/images'

const Navbar = () => {
  return (
    <nav className="py-6 bg-white">
      <div className="container-width flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo}
              alt="OnlyFries Logo"
              width={180}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/by-type" className="nav-link">By Type</Link>
          <Link href="/by-texture" className="nav-link">By Texture</Link>
          <Link href="/by-size" className="nav-link">By Size</Link>
          <Link href="/by-area" className="nav-link">By Area</Link>
          <Link href="/coming-soon" className="nav-link">Coming Soon</Link>
          <button className="btn-primary">Search</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 