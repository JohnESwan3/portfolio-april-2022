import Image from 'next/image'
export default function Process() {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="mb-6 flex flex-col md:mb-10 lg:flex-row"></div>
      <div className="row-gap-10 grid gap-6 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="">
            <h2 className="mb-6 max-w-md font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              My Process
            </h2>
          </div>
          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500 ">
                  <svg
                    className="w-4 text-slate-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-slate-300" />
            </div>
            <div className="transform rounded-lg border-slate-50 py-6 px-8 duration-300 hover:shadow-xl group-hover:-translate-y-5">
              <p className="mb-2 text-lg font-bold">Plan</p>
              <p className="text-slate-700">
                First I plan the project. This includes figuring out a color
                theme, creating a mood board to make the "story" of the project,
                and creating a few more to decide on the best option.
              </p>
            </div>
          </div>
          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500">
                  <svg
                    className="w-4 text-slate-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-slate-300" />
            </div>
            <div className="transform rounded-lg border-slate-50 py-6 px-8 duration-300 hover:shadow-xl group-hover:-translate-y-5">
              <p className="mb-2 text-lg font-bold">Mockup</p>
              <p className="text-slate-700">
                After figuring out the overall story and theme of the project, I
                create a mockup in Figma. Here, the layout, flow and overall
                design is created. This design will be translated into code.
              </p>
            </div>
          </div>
          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500">
                  <svg
                    className="w-4 text-slate-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-slate-300" />
            </div>
            <div className="transform rounded-lg border-slate-50 py-6 px-8 duration-300 hover:shadow-xl group-hover:-translate-y-5">
              <p className="mb-2 text-lg font-bold">Plan</p>
              <p className="text-slate-700">
                Here, the tech stack is planned out. I decide what technologies
                will be used to build the website. This can include TailwindCSS,
                Bootstrap, React, Nextjs, Sanity.io and Webflow.
              </p>
            </div>
          </div>
          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500">
                  <svg
                    className="w-4 text-slate-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-slate-300" />
            </div>
            <div className="transform rounded-lg border-slate-50 py-6 px-8 duration-300 hover:shadow-xl group-hover:-translate-y-5">
              <p className="mb-2 text-lg font-bold">Build</p>
              <p className="text-slate-700">
                This is the longest step in the process. Here, the website is
                built. The styling is translated from the mockup built earlier,
                the CMS and Backend are linked to the Frontend, and everything
                is tied together.
              </p>
            </div>
          </div>

          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500">
                  <svg
                    className="w-4 text-slate-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-full w-px bg-slate-300" />
            </div>
            <div className="transform rounded-lg border-slate-50 py-6 px-8 duration-300 hover:shadow-xl group-hover:-translate-y-5">
              <p className="mb-2 text-lg font-bold">Iterate & Improve</p>
              <p className="text-slate-700">
                No website is ever done. After the website is built and
                deployed, it has to be maintained and improved. Changes to APIs
                and Frameworks need to be accounted for, tweaks in SEO and
                performance optimizations need to be made, and new features can
                be added.
              </p>
            </div>
          </div>
          <div className="group relative flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 group-hover:border-cyan-500">
                  <svg
                    className="w-6 text-slate-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative inset-0 h-96 w-full rounded object-cover object-bottom shadow-lg sm:block lg:absolute lg:hidden lg:h-full">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            quality={50}
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="Productive Desk"
            className="inset-0 h-96 w-full rounded object-cover object-bottom shadow-lg lg:absolute lg:h-full"
          />
        </div>
        <div className="relative sm:hidden lg:block">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            quality={50}
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="Productive Desk"
            className="inset-0 h-96 w-full rounded object-cover object-bottom shadow-lg lg:absolute lg:h-full"
          />
        </div>
      </div>
    </div>
  )
}
