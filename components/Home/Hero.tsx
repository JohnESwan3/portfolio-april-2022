import Image from 'next/image'
export default function Hero() {
  return (
    <div className="relative">
      <Image
        layout="fill"
        placeholder="blur"
        blurDataURL="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        quality={50}
        src="https://images.unsplash.com/Ys-DBJeX0nE.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
        priority
      />
      <div className="relative bg-slate-900 bg-opacity-75 p-5 backdrop-blur-sm md:p-20">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:w-7/12 xl:pr-16">
              <h2 className="max-w-lg font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                John Swan
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
