import Image from 'next/image'
import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Skill } from '../../typings'
import PortableText from 'react-portable-text'

interface Props {
  skill: Skill
}

function Skill({ skill }: Props) {
  return (
    <main>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:mx-auto sm:text-center">
          <div className="mb-5 inline-block rounded-full sm:mx-auto">
            <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full">
              <img src={urlFor(skill.mainImage).url()!} alt="" />
            </div>
          </div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
            {skill.title}
          </h2>
          <p className="text-base text-slate-700 sm:px-4 md:text-lg">
            {skill.description}
          </p>
          <hr className="my-8 w-full border-slate-300" />
        </div>
        <article className="mx-auto mt-10 mb-10 min-h-screen max-w-3xl p-5 font-bold">
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={skill.body}
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
                  <a
                    href={href}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
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

export default Skill

export const getStaticPaths = async () => {
  const query = `*[_type == "skill"]{
        _id,
        slug {
            current
        }
    }`

  const skills = await sanityClient.fetch(query)

  const paths = skills.map((skill: Skill) => ({
    params: {
      slug: skill.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "skill" && slug.current == $slug] [0] {
        _id,
        title,
        mainImage,
        slug,
        body,
        description
    }`
  const skill = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!skill) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      skill,
    },
    revalidate: 60,
  }
}
