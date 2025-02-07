import './globals.css'

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
