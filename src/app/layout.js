import './globals.css'
import { roboto, noto } from './fonts'

export const metadata = {
  metadataBase: new URL('https://www.themidelawal.com'),
  title: 'THE MIDE LAWAL & CO.',
  description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
  openGraph: {
    title: 'THE MIDE LAWAL & CO.',
    description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
    images: [
      {
        url: '/homepage.jpg',
        width: 1834,
        height: 1166,
        alt: 'The Mide Lawal & Co.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE MIDE LAWAL & CO.',
    description: 'Creating A Seamless Entrepreneurial Experience Through Support, Structure And Strategy',
    images: ['/homepage.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
