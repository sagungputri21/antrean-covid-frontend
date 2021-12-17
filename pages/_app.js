import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import UserContext from '../lib/context/UserContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faRegistered, faFile } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faRegistered, faFile)

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Vaksin Kuy</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <UserContext>
    <Component {...pageProps} />
  </UserContext>
  </>
  )
}

export default MyApp
