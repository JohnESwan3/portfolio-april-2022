import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Portfolio/Hero'
const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | JS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="John Swan's Front-End Web Developer portfolio. Open for hire and freelancing opportunities."
        />
      </Head>
      <main className="min-h-screen">
        <Hero />
      </main>
    </div>
  )
}

export default Portfolio
