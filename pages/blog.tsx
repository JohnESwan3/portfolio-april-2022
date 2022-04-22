import Head from 'next/head'
import Hero from '../components/Blog/Hero'
import Link from 'next/link'
import Image from 'next/image'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Blog({ posts }: Props) {
  console.log(posts)
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

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6  lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border shadow-md">
              <Image
                layout="responsive"
                blurDataURL={urlFor(post.mainImage).url()!}
                width={350}
                height={240}
                quality={50}
                src={urlFor(post.mainImage).url()!}
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                alt={post.title}
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
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
  const query = `*[_type == "post"]{
    _id,
    title,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)
  return {
    props: {
      posts,
    },
  }
}
