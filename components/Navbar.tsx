import React, { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-slate-900 shadow-md" id="nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0\">
                <Link href="/">
                  <a aria-label="Home">
                    <h1 className="text-2xl font-bold text-cyan-500">JS</h1>
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="full-nav-item" aria-label="Home">
                      Home
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="full-nav-item" aria-label="Portfolio">
                      Portfolio
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="full-nav-item" aria-label="Blog">
                      Blog
                    </a>
                  </Link>
                  {/* <Link href="/contact">
                    <a className="full-nav-item">Contact</a>
                  </Link> */}
                  <Link href="/about">
                    <a className="full-nav-item" aria-label="About">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 p-2 text-cyan-500 shadow-inner transition-all hover:bg-cyan-700 hover:text-slate-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="space-y-1 px-2 pt-2 pb-3 text-center transition-all sm:px-3"
              >
                <Link href="/">
                  <a className="mobile-nav-item" aria-label="Home">
                    Home
                  </a>
                </Link>
                <Link href="/portfolio" aria-label="Portfolio">
                  <a className="mobile-nav-item">Portfolio</a>
                </Link>
                <Link href="/blog">
                  <a className="mobile-nav-item" aria-label="Blog">
                    Blog
                  </a>
                </Link>
                {/* <Link href="/contact">
                  <a className="mobile-nav-item">Contact</a>
                </Link> */}

                <Link href="/about">
                  <a className="mobile-nav-item" aria-label="About">
                    About
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}
