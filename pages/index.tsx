import Head from 'next/head'
import Hero from '../components/Home/Hero'
import Content from '../components/Home/Content'
import Process from '../components/Home/Process'
import Link from 'next/link'
import { sanityClient, urlFor } from '../sanity'
import { Skill } from '../typings'

interface Props {
  skills: [Skill]
}

export default function Home({ skills }: Props) {
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

        <div className="mx-auto items-center px-4 py-16 text-center sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="row-gap-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {skills.map((skill) => (
              <Link key={skill._id} href={`/skill/${skill.slug.current}`}>
                <div className="group relative transform cursor-pointer overflow-hidden rounded border p-px shadow-sm transition duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-cyan-500 duration-300 group-hover:scale-x-100" />
                  <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-cyan-500 duration-300 group-hover:scale-y-100" />
                  <div className="absolute top-0 left-0 h-1 w-full origin-right scale-x-0 transform bg-cyan-500 duration-300 group-hover:scale-x-100" />
                  <div className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-cyan-500 duration-300 group-hover:scale-y-100" />
                  <div className="relative rounded-sm bg-white p-5">
                    <div className="mb-2 flex flex-col lg:flex-row lg:items-center">
                      <h6 className="font-semibold leading-5">{skill.title}</h6>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "skill"]{
    _id,
    title,
    slug
  }`

  const skills = await sanityClient.fetch(query)
  return {
    props: {
      skills,
    },
  }
}
