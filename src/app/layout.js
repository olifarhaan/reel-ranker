import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Reel Ranker | Your Ultimate Movie Rating Destination',
  description: 'Welcome to Reel Ranker, the premier online platform for movie enthusiasts! Discover, rate, and review your favorite films and TV shows. Explore a vast database of titles, from timeless classics to the latest releases.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
