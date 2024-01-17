import type { Metadata } from 'next'
import './globals.css'
import { Header } from './components/header'

export const metadata: Metadata = {
  title: 'Longjun Wang',
  description: 'Developer and Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

