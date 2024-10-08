/*import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import {Analytics} from "@vercel/analytics/next";
import {useRouter} from "next/router";

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps }) {
  const router =useRouter();
  let previousPathname = usePrevious(router.pathname)

  useEffect(() => {
    if(!router.isReady) return;
  },[ router.isReady])

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          {/!*<div className="w-full bg-white ring-1 ring-red-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />*!/}
          <div className="w-full bg-white dark:bg-zinc-900" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
          <Analytics />
        </main>
        <Footer />
      </div>
    </>
  )
}*/

import { useEffect, useRef } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import { Analytics } from '@vercel/analytics/next'
import { useRouter } from 'next/router'

function usePrevious(value) {
    let ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
}

export default function App({ Component, pageProps }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = typeof window !== 'undefined' ? useRouter() : null // Only access router on the client
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let previousPathname = router ? usePrevious(router.pathname) : null

    useEffect(() => {
        if (!router?.isReady) return
    }, [router?.isReady])

    return (
        <>
            <div className="fixed inset-0 flex justify-center sm:px-8">
                <div className="flex w-full max-w-7xl lg:px-8">
                    <div className="w-full bg-white dark:bg-zinc-900" />
                </div>
            </div>
            <div className="relative">
                <Header />
                <main>
                    <Component previousPathname={previousPathname} {...pageProps} />
                    <Analytics />
                </main>
                <Footer />
            </div>
        </>
    )
}
