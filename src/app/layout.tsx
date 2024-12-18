import type { Metadata } from 'next'
import { Open_Sans, Poppins } from 'next/font/google'
import '@/app/scss/index.scss'
import Header from '@/app/components/Header'
import TopNav from './components/Navs/TopNav'

import Image from 'next/image'
import SignInBtn from './components/Buttons/SignInBtn'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

// Volkhov

/* const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
}) */

export const metadata: Metadata = {
  title: 'Jadoo',
  description: 'Best Destinations around the world',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header
          className={`fixed top-0 left-0 w-full pt-[5rem] ${openSans.className}`}
        >
          <Image
            src="/images/logo.svg"
            alt="Jadoo"
            width={116}
            height={35}
            priority={true}
            loading="eager"
          />
          <TopNav />
          <SignInBtn />
        </Header>
        {children}
      </body>
    </html>
  )
}
