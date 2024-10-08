import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'
import {Analytics} from "@vercel/analytics/next";
import {useRouter} from "next/router";

function usePrevious(value) {
  let ref = useRef()
  const router =useRouter();

  useEffect(() => {
    ref.current = value
    if(!router.isReady) return;
  }, [value, router.isReady])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          {/*<div className="w-full bg-white ring-1 ring-red-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />*/}
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
