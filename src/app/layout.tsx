import type { Metadata } from 'next'
import openSans from '@/app/fonts/openSans'
import poppins from '@/app/fonts/poppins'
import '@/app/scss/index.scss'
import Header from '@/app/components/Header'
import TopNav from './components/Navs/TopNav'
import Image from 'next/image'
import SignInBtn from './components/Buttons/SignInBtn'

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
          <>
            <SignInBtn />
            <select
              className="bg-transparent max-w-[3.85rem]"
              name="language"
              id="language"
            >
              <option value="en">EN</option>
              <option value="pt">PT-BR</option>
            </select>
          </>
        </Header>
        {children}
      </body>
    </html>
  )
}
