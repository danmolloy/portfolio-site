import { Metadata } from 'next'
import Header from './layout/header'
import Footer from './layout/footer'
import "./globals.css";
import { Inconsolata, Raleway, Poiret_One, Poppins, Rubik, Noto_Serif_JP, Crimson_Text, PT_Serif, Quicksand } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react";

const quicksand = Quicksand({weight: "400", subsets: ['latin'], variable: "--font-quicksand"})
//const poiretOne = Poiret_One({weight: '400', subsets: ["latin"], variable:"--font-poiret"})
const notoSerif = PT_Serif({weight: '400',subsets: ["latin"], variable:"--font-noto-serif"})

 
export const metadata: Metadata = {
  title: 'Daniel Molloy | Developer',
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
    <html lang="en" className={`${quicksand.variable} ${notoSerif.variable}`}>
      <body>
      
    <div data-testid="layout" className={` w-full min-h-screen bg-white flex flex-col items-center justify-between font-sans dark:bg-slate-900 dark:text-blue-300`}>
      <Header />
      <main className={` flex flex-col items-center`}>
      {children}
      </main>
      <Footer />
    </div>
  
      </body>
      <Analytics />
    </html>
  )
}