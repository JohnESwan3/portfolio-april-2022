import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <div className="relative -mt-[64px]">
      <Image
        layout="fill"
        placeholder="blur"
        blurDataURL="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        quality={50}
        src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="absolute inset-0 h-full w-full object-cover z-0"
        alt=""
        priority
      />
      <div className=" flex h-screen items-center justify-center bg-slate-900 bg-opacity-75 text-right backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4 border-b border-cyan-600 pb-6">
            <h1 className="max-w-lg text-4xl font-semibold tracking-normal text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              John Swan
            </h1>
            <p className="text-sm text-slate-200 md:text-base lg:text-lg">
              Front End Web-Developer
            </p>
          </div>
          <hr className="border-b border-white" />
          <div className="flex space-x-4">
            <Link href="/portfolio">
              <a
                aria-label="Go to projects"
                className="focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-cyan-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-slate-500 focus:outline-none"
              >
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a
                aria-label="Go to blog"
                className="focus:shadow-outline inline-flex h-12 items-center justify-center rounded px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-cyan-600 focus:outline-none"
              >
                My Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
