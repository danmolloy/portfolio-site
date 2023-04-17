import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Ubuntu } from 'next/font/google'

const montserrat = Ubuntu({ weight: '400', subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
