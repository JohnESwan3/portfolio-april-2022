import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import { Project } from '../typings'
import Hero from '../components/Portfolio/Hero'

interface Props {
  projects: [Project]
}

export default function Portfolio({ projects }: Props) {
  console.log(projects)
  return (
    <div className="min-h-screen">
      <Head>
        <title>Portfolio | JS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="John Swan's Front-End Web Developer portfolio. Open for hire and freelancing opportunities."
        />
      </Head>

      <Hero />

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project._id} href={`/portfolio/${project.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(project.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{project.title}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// SSR the Sanity Data
export const getServerSideProps = async () => {
  const query = `*[_type == "project"]{
    _id,
    title,
    mainImage,
    slug
  }`

  const projects = await sanityClient.fetch(query)
  return {
    props: {
      projects,
    },
  }
}
