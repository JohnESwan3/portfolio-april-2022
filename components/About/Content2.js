export default function Content2() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
        <div>
          <p className="mb-4 inline-block rounded-full px-3 py-px text-sm font-semibold uppercase tracking-wider text-cyan-600">
            2022
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
          Goals for 2023
        </h2>
        <p className="text-base text-slate-700 md:text-lg">
          There are many goals that I have for 2022. Some of them are listed
          below
        </p>
      </div>
      <div className="row-gap-5 md:row-gap-8 relative mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="h-full w-px bg-slate-300 lg:h-px lg:w-full" />
        </div>
        <div className="transform rounded border bg-white p-5 shadow-sm duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-bold leading-5">Blog</p>
            <p className="flex h-6 w-6 items-center justify-center rounded bg-indigo-50 font-bold text-cyan-600">
              1
            </p>
          </div>
          <p className="text-sm text-slate-900">
            Keep a semi-regular blog on this website and micro-blog on Social
            Media.
          </p>
        </div>
        <div className="transform rounded border bg-white p-5 shadow-sm duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-bold leading-5">Improve</p>
            <p className="flex h-6 w-6 items-center justify-center rounded bg-indigo-50 font-bold text-cyan-600">
              2
            </p>
          </div>
          <p className="text-sm text-slate-900">
            Improve the front-end skills that I already have. Always be better.
          </p>
        </div>
        <div className="transform rounded border bg-white p-5 shadow-sm duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-bold leading-5">Back-end</p>
            <p className="flex h-6 w-6 items-center justify-center rounded bg-indigo-50 font-bold text-cyan-600">
              3
            </p>
          </div>
          <p className="text-sm text-slate-900">
            Along with improving my front-end skills, I am working towards
            back-end and some data-base skills.
          </p>
        </div>
        <div className="transform rounded border bg-white p-5 shadow-sm duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-lg font-bold leading-5">Video</p>
            <p className="flex h-6 w-6 items-center justify-center rounded bg-indigo-50 font-bold text-cyan-600">
              4
            </p>
          </div>
          <p className="text-sm text-slate-900">
            Make videos documenting my work on YouTube and Odysee. This is the
            hardest one for me but it is also one that I really want to do.
          </p>
        </div>
      </div>
    </div>
  )
}
