import { useEffect, useRef, } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'
import { Analytics } from '@vercel/analytics/next'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export default function App({ Component, pageProps, router }) {
  const previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white dark:bg-zinc-950" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main aria-label="Main content">
          <Analytics />
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
