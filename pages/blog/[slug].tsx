import Image from 'next/image'
import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'

interface Props {
  post: Post
}

function Blog({ post }: Props) {
  return (
    <main>
      {/* Banner */}
      <div className="relative">
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={urlFor(post.mainImage).url()!}
          quality={25}
          src={urlFor(post.mainImage).url()!}
          className="absolute inset-0 h-full w-full object-cover"
          alt={post.title}
          priority
        />
        <div className="relative bg-slate-900 bg-opacity-75 p-5 backdrop-blur-sm md:p-20">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"></div>
        </div>
      </div>
      <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:mx-auto sm:text-center">
          <div className="mb-5 inline-block rounded-full sm:mx-auto"></div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
            {post.title}
          </h2>
          <p className="text-light text-slate-500 sm:px-4 md:text-lg">
            {post.description}
          </p>

          <p className="text-md font-extralight">
            By: <span className="text-cyan-600">{post.author.name}</span>
            {/* Published at {new Date(post._createdAt).toLocaleString()} */}
          </p>
          <hr className="my-8 w-full border-slate-300" />
        </div>
        <article className="mx-auto min-h-screen max-w-3xl p-5 font-bold">
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
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
                  <li className="ml-4 list-disc font-semibold">{children}</li>
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

export default Blog

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug] [0] {
    _id,
    createdAt,
    title,
    mainImage,
    slug,
    body,
    description,
    author-> {
      name,
      image
    }
  }`
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
