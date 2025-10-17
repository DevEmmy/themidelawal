import './globals.css'
import { roboto, noto } from './fonts'

export const metadata = {
  title: 'THE MIDE LAWAL & CO.',
  description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
  openGraph: {
    title: 'THE MIDE LAWAL & CO.',
    description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
    images: [
      {
        url: '/homepage.png',
        width: 1200,
        height: 630,
        alt: 'The Mide Lawal & Co.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE MIDE LAWAL & CO.',
    description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
    images: ['/homepage.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
