import Image from 'next/image'
import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PortableText from 'react-portable-text'

interface Props {
  post: Post
}

function Post({ post }: Props) {
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
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl xl:w-7/12 xl:pr-16">
                <h2 className="max-w-lg font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                  {post.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
