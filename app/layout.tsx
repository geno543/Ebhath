import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ebhath - Scientific Research Education',
  description: 'Ebhath is a nonprofit dedicated to closing the educational gap in scientific research resources by offering courses in underrepresented languages.',
  icons: {
    icon: '/img/Ebhath_logo/Ebhath_Official_Logo-08.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
