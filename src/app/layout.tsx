import './globals.css'
import { dancingScript, geistSans, geistMono } from './fonts'

export const metadata = {
  title: 'OnlyFries',
  description: 'Your favorite type of (food) porn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${dancingScript.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
