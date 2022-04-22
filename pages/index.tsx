import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Home/Hero'
import Content from '../components/Home/Content'
import Process from '../components/Home/Process'
import Skills from '../components/Home/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | JS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="John Swan's Front-End Web Developer portfolio. Open for hire and freelancing opportunities."
        />
      </Head>
      <main className="min-h-screen">
        <Hero />
        <Content />
        <Process />
        <Skills />
      </main>
    </div>
  )
}

export default Home
