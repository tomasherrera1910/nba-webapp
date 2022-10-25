import '../styles/globals.css'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
