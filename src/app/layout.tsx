import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harini G - Full Stack Developer',
  description: 'Full-stack developer with 2+ years of experience building scalable web applications using Java, Python, and cloud technologies.',
  keywords: 'Full Stack Developer, Java, Python, React, Next.js, AWS, Healthcare Technology',
  authors: [{ name: 'Harini G' }],
  openGraph: {
    title: 'Harini G - Full Stack Developer',
    description: 'Full-stack developer specializing in healthcare solutions and cloud architecture',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}