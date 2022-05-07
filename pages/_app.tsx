import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="bg-gray-200 ">
        <ul className="flex space-x-10">
          <li>
            <Link href="/">Job offers</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign in</Link>
          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
