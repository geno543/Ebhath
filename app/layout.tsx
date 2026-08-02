import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ebhath — Scientific research education in under-served languages',
    template: '%s',
  },
  description:
    'Ebhath is a 501(c)(3) nonprofit teaching scientific research methodology in Arabic, Filipino and Swahili. Applications for the Foundations Program are open.',
  icons: {
    icon: '/images/Ebhath_Official_Logo-08.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A1120]`}>
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
