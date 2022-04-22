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
          quality={50}
          src={urlFor(post.mainImage).url()!}
          className="absolute inset-0 h-full w-full object-cover"
          alt={post.title}
          priority
        />
        <div className="relative bg-slate-900 bg-opacity-75 p-5 backdrop-blur-sm md:p-20">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row"></div>
          </div>
        </div>
      </div>
      <article className="mx-auto min-h-screen max-w-3xl p-5 font-bold"></article>
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
