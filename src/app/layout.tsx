import './globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/public/images/background.png'

export const metadata: Metadata = {
  title: 'OnlyFries',
  description: 'Your favorite type of (food) porn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="fixed-background">
        <div className="scrollable-content">
          <main className="flex-grow">
            <div className="container-wrapper">
              <div className="content-box">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
