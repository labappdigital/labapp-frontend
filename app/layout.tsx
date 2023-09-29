import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LabApp',
  description: 'Elevate your crypto project with LabApp! Explore custom Web3 applications designed to amplify your success. Unleash the future of crypto today.',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": '/homepage-thumbnail.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "labapp.digital",
    "og:image": '/homepage-thumbnail.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
