import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  MediumIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/about-image.jpeg'
import { personalInfo, skills } from '@/data/info'

// ─── Social Link ──────────────────────────────────────────────────────────────

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-400"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

// ─── About Page ───────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      <Head>
        <title>About — {personalInfo.name}</title>
        <meta
          name="description"
          content="Yassin Ezaouibi — Applied Mathematics and AI student at UMP. Combines rigorous mathematical foundations (optimization, probability, statistics, fractals) with real-world machine learning engineering including anomaly detection for industrial systems."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

          {/* Photo */}
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Yassin Ezaouibi"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
              {/* Availability badge on photo col */}
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open to PFE Internship · Feb 2027
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {personalInfo.about.title}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {personalInfo.about.sections.map((section, index) => (
                <p key={index}>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                    {section.title}
                  </span>
                  <br />
                  {section.content}
                </p>
              ))}
            </div>

          </div>

          {/* Links */}
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={personalInfo.social.github} icon={GitHubIcon} className="mt-4">
                GitHub — YassinEzaouibi
              </SocialLink>
              <SocialLink href={personalInfo.social.medium} icon={MediumIcon} className="mt-4">
                Medium — Articles on AI
              </SocialLink>
              <SocialLink href={personalInfo.social.linkedin} icon={LinkedInIcon} className="mt-4">
                LinkedIn
              </SocialLink>
              <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-400"
                >
                  <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
                  <span className="ml-4">{personalInfo.email}</span>
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  href={personalInfo.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition"
                >
                  <span>→ View full CV on read.cv</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </>
  )
}
