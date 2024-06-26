import { Metadata } from 'next'
import Header from './layout/header'
import Footer from './layout/footer'
import "./globals.css";
import { Inconsolata, Raleway, Poiret_One } from 'next/font/google'

const raleway = Raleway({subsets: ['latin'], variable: "--font-raleway"})
//const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})
const inconsolata = Inconsolata({subsets: ["latin"], variable:"--font-inconsolata"})

 
export const metadata: Metadata = {
  title: 'Dan Molloy: Web Developer',
  description: 'Dan Molloy is an Australian web developer based in London.',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      
    <div data-testid="layout" className={`${raleway.variable} ${inconsolata.variable} dark:bg-zinc-900 dark:text-zinc-300 w-full min-h-screen bg-white flex flex-col items-center justify-between font-sans`}>
      <Header />
      <main className={` transition duration-500 flex flex-col items-center`}>
      {children}
      </main>
      <Footer />
    </div>
  
      </body>
    </html>
  )
}