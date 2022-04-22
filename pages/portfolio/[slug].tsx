import Image from 'next/image'
import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Project } from '../../typings'
import PortableText from 'react-portable-text'

interface Props {
  project: Project
}

function Project({ project }: Props) {
  return (
    <main>
      {/* Banner */}
      <div className="relative">
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={urlFor(project.mainImage).url()!}
          quality={25}
          src={urlFor(project.mainImage).url()!}
          className="absolute inset-0 h-full w-full object-cover"
          alt={project.title}
          priority
        />
        <div className="relative bg-slate-900 bg-opacity-75 p-5 backdrop-blur-sm md:p-20">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* Tech Stack */}
        {/* Text Body */}
        <article className="mx-auto mt-10 mb-10 max-w-3xl p-5 font-bold">
          <h1 className="mb-3 text-3xl">{project.title}</h1>
          <h2 className="mb-2 text-xl font-light text-slate-600">
            {project.description}
          </h2>
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={project.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="my-5 text-2xl font-bold" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="my-5 text-xl font-bold" {...props} />
                ),
                normal: (props: any) => (
                  <p className="my-5 text-lg font-normal" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
      </div>
    </main>
  )
}

export default Project

export const getStaticPaths = async () => {
  const query = `*[_type == "project"]{
        _id,
        slug {
            current
        }
    }`

  const projects = await sanityClient.fetch(query)

  const paths = projects.map((project: Project) => ({
    params: {
      slug: project.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == $slug] [0] {
        _id,
        createdAt,
        title,
        description,
        mainImage,
        slug,
        body,
    }`
  const project = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
    revalidate: 60,
  }
}
