import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-10 lg:grid-cols-16 mb-8 grid">
          <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
            <div>
              <p className="footer-main">Navigate</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/">
                    <a className="footer-secondary">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio">
                    <a className="footer-secondary">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="footer-secondary">Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-main">About</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/about">
                    <a className="footer-secondary">About Me</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="footer-secondary">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-main">Find Me At</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://www.stockpilegaming.com"
                    target="_blank"
                    className="footer-secondary"
                  >
                    Stockpile Gaming
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-main">Other Info</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/">
                    <a className="footer-secondary">Tech Stack</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="footer-secondary">Freelance</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Email Form */}
          <div className="md:max-w-md lg:col-span-2"></div>
        </div>
        <div className="flex flex-col justify-between border-t border-slate-800 pt-5 pb-10 sm:flex-row">
          <p className="text-sm text-slate-500">
            © Copyright 2022 John Swan. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            {/* Twitter */}
            <a
              href="https://twitter.com/John3Swan"
              target="_blank"
              className="text-slate-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jes3/"
              target="_blank"
              className="text-slate-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Github */}
            <a
              href="https://github.com/JohnESwan3"
              target="_blank"
              className="text-slate-500 transition-colors duration-300 hover:text-cyan-500"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
