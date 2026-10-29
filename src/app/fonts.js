import { Noto_Serif_Display, Roboto } from 'next/font/google'

export const roboto = Roboto({ subsets: ['latin'], weight: ["300", "400", "500", "700"], variable: "--font-roboto", display: "swap" })
export const noto = Noto_Serif_Display({ subsets: ['latin'], variable: "--font-noto", display: "swap" })
