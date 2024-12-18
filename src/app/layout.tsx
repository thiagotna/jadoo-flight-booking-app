import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/app/scss/index.scss'
import Header from '@/app/components/Header'
import TopNav from './components/TopNav'
import Button from './components/Button'
import Image from 'next/image'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="mt-[50px]">
          <Image
            src="/images/logo.svg"
            alt="Jadoo"
            width={116}
            height={35}
            priority={true}
            loading="eager"
          />
          <TopNav />
          <Button />
        </Header>
        {children}
      </body>
    </html>
  )
}
