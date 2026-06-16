import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Los Angeles Capital Management',
  description: 'A Global Quantitative Equity Manager — $31.5B in firmwide assets under management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
