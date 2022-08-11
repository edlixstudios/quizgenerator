import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/shared/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>QuizGenerator by ealbrecht.dev</title>
        <link rel='shortcut icon' href='/images/icon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
