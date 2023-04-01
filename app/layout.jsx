import './globals.css'
import Nav from './auth/Nav'
import { Roboto } from "@next/font/google"

// Configure the Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
})

// Set the font styles on the HTML element


export const metadata = {
  title: 'Creative Minds',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head />
      <body className='mx-4 md:mx-48 xl:mx-96 ${roboto.variable} bg-gray-200'>
        <Nav />
        {children}
      </body>
    </html>
  )
}
