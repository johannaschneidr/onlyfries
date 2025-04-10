import Image from 'next/image'
import { images } from '@/assets/images'

const Footer = () => {
  return (
    <footer className="container-width py-12 border-t">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <p className="ml-8 text-sm text-gray-500">© 2024 OnlyFries. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 