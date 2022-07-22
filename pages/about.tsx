import Head from 'next/head'
import Hero from '../components/About/Hero'
import Content1 from '../components/About/Content1'
import Content2 from '../components/About/Content2'

export default function About() {
  return (
    <div className="">
      <Head>
        <title>About | JS</title>
        <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta
              name="description"
              content="John Swan's Front-End Web Developer portfolio. About me."
          />
          <meta name="author" content="John Swan" />
          <meta name="keywords" content="John Swan, Web Developer, React, Next.js, Front-End, Developer, Portfolio"/>
      </Head>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Content1 />
        <Content2 />
      </main>
    </div>
  )
}
