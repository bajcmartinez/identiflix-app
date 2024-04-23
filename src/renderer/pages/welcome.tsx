/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import featured1 from '../../../public/assets/featured1.jpg'
// @ts-ignore
import featured2 from '../../../public/assets/featured2.jpg'
// @ts-ignore
import featured3 from '../../../public/assets/featured3.jpg'
// @ts-ignore
import featured4 from '../../../public/assets/featured4.jpg'
// @ts-ignore
import featured5 from '../../../public/assets/featured5.jpg'
// @ts-ignore
import auth0Logo from '../../../public/assets/auth0_logo_header.svg'
import { NavLink } from 'react-router-dom'

export default function() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 min-h-screen">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"/>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:justify-between lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="https://auth0.com" className="inline-flex space-x-4 align-middle" target="_blank">
              <img src={auth0Logo} alt="Auth0 by Okta" />
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            Identiflix
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Watch anywhere. Learn Identity.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <NavLink
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              to="/login"
            >
              Login to Start
            </NavLink>
          </div>
        </div>
        <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
          <div
            className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
            <div className="relative">
              <img
                src={featured1}
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg border-gray-600 border-2 shadow-gray-800"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
          </div>
          <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
            <div className="relative">
              <img
                src={featured2}
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg border-gray-600 border-2 shadow-gray-800"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
            <div className="relative">
              <img
                src={featured3}
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg border-gray-600 border-2 shadow-gray-800"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
          </div>
          <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
              <img
                src={featured4}
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg border-gray-600 border-2 shadow-gray-800"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
            <div className="relative">
              <img
                src={featured5}
                alt=""
                className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg border-gray-600 border-2 shadow-gray-800"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
