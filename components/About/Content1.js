export default function Content1() {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:flex-col lg:pt-0 lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 mx-auto w-full max-w-xl px-4 md:px-0 lg:absolute lg:mx-0 lg:mb-0 lg:w-7/12 lg:max-w-full lg:pr-0 xl:px-0 ">
        <svg
          className="absolute left-0 hidden h-full -translate-x-1/2 transform text-white lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="h-56 w-full rounded object-cover shadow-lg md:h-96 lg:h-full lg:rounded-none lg:shadow-none"
          src="https://images.unsplash.com/photo-1622748917434-46d05e8087c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          alt=""
        />
      </div>
      <div className="relative mx-auto flex w-full max-w-xl flex-col items-start px-4 md:px-0 lg:max-w-screen-xl lg:px-8">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="mb-4 inline-block px-3 py-px text-xs font-semibold uppercase tracking-wider text-cyan-600">
            John Swan
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
            About Me
          </h2>
          <p className="mb-5 pr-5 text-base text-slate-700 md:text-lg">
            I am a self-taught front-end web developer from Idaho. I focus my
            abilities around React and Next.js, but I love learning new
            technologies as well. I am currently dipping into backend
            development with PHP, Node.js and Python and a little bit of MySQL
            while improving my Front-End skills.
          </p>
        </div>
      </div>
    </div>
  )
}
