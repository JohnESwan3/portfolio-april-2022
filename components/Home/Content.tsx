import Image from 'next/image'

export default function Content() {
  return (
    //   Section 1
    <div>
      <section className="mx-auto flex max-w-xl flex-col justify-between px-4 md:px-8 lg:max-w-screen-xl lg:flex-row lg:pt-16">
        <div className="mb-16 pt-16 lg:mb-0 lg:max-w-lg lg:pt-32 lg:pr-5">
          <div className="mb-6 max-w-xl">
            <div>
              <p className="mb-4 inline-block rounded-full bg-cyan-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-slate-50 shadow">
                Mobile First
              </p>
            </div>
            <h2 className="tracking light mb-6 max-w-lg font-sans text-3xl font-bold text-slate-900 sm:text-4xl sm:leading-none">
              Fully Responsive
            </h2>
            <p className="text-base text-slate-700 md:text-lg">
              Mobile devices make up 55% of all internet traffic. As more cities
              nad countries get faster internet access, the necessity for Mobile
              First Development gets higher and higher. Building an optimized
              web-app with PWA support is what I do.
            </p>
          </div>
        </div>

        {/* Small Screen Image */}
        <div className="mx-auto w-full transform object-top duration-300 hover:-translate-y-5 sm:block md:max-w-sm  lg:h-auto xl:mr-24">
          <Image
            layout="responsive"
            width={300}
            height={355}
            placeholder="blur"
            blurDataURL="/two-thirds-phone.webp"
            quality={100}
            src="/two-thirds-phone.webp"
            className="object-cover object-top"
            alt="iphone with swirl"
            priority
          />
        </div>
      </section>
      <section>
        <div className="relative mx-auto flex flex-col-reverse px-4 py-16 sm:max-w-xl md:max-w-full md:px-8 lg:block lg:flex-col lg:py-32 xl:py-48">
          <div className="z-0 -mx-4 flex h-full justify-center overflow-hidden lg:absolute lg:bottom-0 lg:left-0 lg:w-1/2 lg:items-center lg:justify-end lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 z-10">
            <img
              src="/laptop.webp"
              className="h-auto w-full transform object-cover object-right duration-300 hover:-translate-x-10 lg:h-full lg:w-auto"
              alt="Laptop with Swirl Design"
            />
          </div>
          <div className="relative mx-auto flex max-w-xl justify-end lg:max-w-screen-xl xl:pr-32 z-0">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className=" mb-4 inline-block rounded-full bg-cyan-600 px-3 py-px text-sm font-semibold uppercase tracking-wider text-slate-50 shadow">
                    On the big sceen
                  </p>
                </div>
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
                  More Screen. <br />
                  More Potential.
                </h2>
                <p className="text-base text-slate-700 md:text-lg">
                  More screen space means more opportunity. Desktops, Laptops
                  and Tablets provide an opportunity to do more with websites.
                  Games, animations, and more productive layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
