import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/Header';
import Nav from './../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="A replica of the Hulu app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Navbar */}
      <Nav/>

      {/* Results */}
    </div>
  )
}
