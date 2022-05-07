import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Navigation } from 'components/navigation/navigation'
import { AppProviders } from 'components/context/appProviders'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <div className="antialiased xl:h-screen grid xl:grid-cols-[max-content,1fr]">
        <Navigation />
        <div className="all-child:(p-2 sm:p-3 xl:(px-4 py-4) xl:h-screen)">
          <Component {...pageProps} />
        </div>
      </div>
    </AppProviders>
  )
}

export default MyApp
