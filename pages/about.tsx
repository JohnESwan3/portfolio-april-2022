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
        <meta name="description" content="Front-End Web Developer - About Me" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Content1 />
        <Content2 />
      </main>
    </div>
  )
}
