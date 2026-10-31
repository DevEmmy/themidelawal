import './globals.css'
import { roboto, noto } from './fonts'

export const metadata = {
  metadataBase: new URL('https://www.themidelawal.com'),
  title: 'The Mide Lawal & Co. · Strategy & Operations Advisory',
  description: 'We build the systems, processes and structure behind expert-led brands, so your business runs without you in everything.',
  openGraph: {
    title: 'The Mide Lawal & Co. · Strategy & Operations Advisory',
    description: 'We build the systems, processes and structure behind expert-led brands, so your business runs without you in everything.',
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
    title: 'The Mide Lawal & Co. · Strategy & Operations Advisory',
    description: 'We build the systems, processes and structure behind expert-led brands, so your business runs without you in everything.',
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
