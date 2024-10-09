/*
import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className="flex h-full flex-col  dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
*/

import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const updateMode = () => {
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
    if (isDarkMode === isSystemDarkMode) delete window.localStorage.isDarkMode;
  };
  const disableTransitionsTemporarily = () => {
    document.documentElement.classList.add('[&_*]:!transition-none');
    setTimeout(() => document.documentElement.classList.remove('[&_*]:!transition-none'), 0);
  };
  const updateModeWithoutTransitions = () => {
    disableTransitionsTemporarily();
    updateMode();
  };
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions);
  window.addEventListener('storage', updateModeWithoutTransitions);
  updateMode();
`;

export default function Document() {
    return (
        <Html className="h-full antialiased" lang="en">
            <Head>
                <script dangerouslySetInnerHTML={{ __html: modeScript }} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="flex h-full flex-col dark:bg-zinc-900">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}