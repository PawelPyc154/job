import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Navigation } from 'components/navigation/navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased xl:h-screen grid xl:grid-cols-[max-content,1fr]">
      <Navigation />
      <div className="all-child:(p-2 sm:p-3 xl:(px-4 py-4) xl:h-screen)">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
