import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  MediumIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import { useEffect, useState, useRef } from 'react'

import { subscribeUser } from '@/services/newsletterService'
import { useRouter } from 'next/compat/router'

import { personalInfo, experience, education, skills } from '@/data/info'

// ─── Icons ───────────────────────────────────────────────────────────────────

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function EducationIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M16 6.28a1.23 1.23 0 0 0-.62-1.07l-6.74-4a1.27 1.27 0 0 0-1.28 0l-6.75 4a1.25 1.25 0 0 0 0 2.15l1.92 1.12v2.81a1.28 1.28 0 0 0 .62 1.09l4.25 2.45a1.28 1.28 0 0 0 1.24 0l4.25-2.45a1.28 1.28 0 0 0 .62-1.09V8.45l1.24-.73v2.72H16V6.28z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="M8 10.27l-6.75-4L8 2.26l6.75 4z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <path d="M12.27 11.28L8 13.74 3.78 11.29V9.22l3.58 2.13a1.29 1.29 0 0 0 1.28 0l3.62-2.16z" className="stroke-zinc-400 dark:stroke-zinc-500" />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M3 18h18" stroke="currentColor" />
    </svg>
  )
}

// ─── Typing Animation ─────────────────────────────────────────────────────────

function TypingRole({ variants }) {
  const [displayText, setDisplayText] = useState('')
  const [variantIndex, setVariantIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = variants[variantIndex]
    let timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 1800)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && displayText === current) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setVariantIndex((i) => (i + 1) % variants.length)
      return
    }

    const speed = isDeleting ? 40 : 70
    timeout = setTimeout(() => {
      setDisplayText(isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, variantIndex, variants])

  return (
    <span className="text-amber-600 dark:text-amber-400">
      {displayText}
      <span className="ml-0.5 inline-block w-0.5 h-[0.85em] bg-amber-600 dark:bg-amber-400 align-middle animate-pulse" />
    </span>
  )
}

// ─── Availability Badge ───────────────────────────────────────────────────────

function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-400">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      Open to PFE Internship · Feb 2027
    </span>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const stats = [
  { label: 'Internships', value: '4+' },
  { label: 'AI Articles', value: '2' },
  { label: 'Core Stack', value: 'Python · PyTorch · Sklearn' },
  { label: 'Target', value: 'PFE Feb 2027' },
]

function StatsBar() {
  return (
    <div className="mt-12 rounded-2xl border border-zinc-100 bg-zinc-50/50 dark:border-zinc-700/40 dark:bg-zinc-800/30 px-6 py-4">
      <dl className="flex flex-wrap gap-x-10 gap-y-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">{s.label}</dt>
            <dd className="mt-0.5 text-sm font-semibold text-zinc-800 dark:text-zinc-100">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

// ─── Stat Cards ──────────────────────────────────────────────────────────────

const statCards = [
  { value: '4+',       label: 'Internships' },
  { value: '6 mo',     label: 'AI Research' },
  { value: '3+',       label: 'AI Projects' },
  { value: 'Feb 2027', label: 'PFE Target'  },
]

function StatCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
      {statCards.map((s) => (
        <div
          key={s.label}
          className="group flex flex-col items-center justify-center rounded-xl border border-amber-400/20 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-4 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-400/40"
        >
          <span className="font-mono text-xl font-bold text-amber-600 dark:text-amber-400">{s.value}</span>
          <span className="mt-1 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{s.label}</span>
        </div>
      ))}
    </div>
  )
}


// ─── Social Link ──────────────────────────────────────────────────────────────

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-amber-400" />
    </Link>
  )
}

// ─── Article Card ─────────────────────────────────────────────────────────────

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

// ─── Resume / Experience ──────────────────────────────────────────────────────

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100/60 bg-white/60 p-6 backdrop-blur-md shadow-sm dark:border-zinc-700/50 dark:bg-zinc-800/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-5">
        {experience.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                {role.company}
                {role.highlight && (
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:ring-amber-800/40">
                    AI/ML
                  </span>
                )}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {role.start} — {role.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href={personalInfo.cvUrl}
        target="_blank" rel="noopener noreferrer"
        variant="secondary"
        className="group mt-6 w-full"
      >
        <DownloadIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50 mr-2" />
        Download CV
      </Button>
    </div>
  )
}

// ─── Education ────────────────────────────────────────────────────────────────

function Education() {
  return (
    <div className="rounded-2xl border border-zinc-100/60 bg-white/60 p-6 backdrop-blur-md shadow-sm dark:border-zinc-700/50 dark:bg-zinc-800/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EducationIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Institution</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{role.company}</dd>
              <dt className="sr-only">Degree</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {role.start} — {role.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

// ─── Static Props ─────────────────────────────────────────────────────────────

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>{personalInfo.name} — Applied Mathematics & AI Engineer</title>
        <meta
          name="description"
          content="Yassin Ezaouibi — Applied Mathematics & AI Engineering student at UMP. Specializing in anomaly detection, time series analysis, mathematical optimization, and machine learning. Open to PFE internship starting Feb 2027."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── Cinematic Hero ── */}
      <div className="relative overflow-hidden bg-zinc-100 dark:bg-[#09090b]">
        {/* Amber glow top-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)' }}
        />
        {/* Amber glow bottom-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)' }}
        />

        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            {/* Availability badge */}
            <AvailabilityBadge />

            {/* Name */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl leading-tight">
              {personalInfo.name}
            </h1>

            {/* Animated role — monospace amber, darker in light mode */}
            <p className="mt-2 font-mono text-lg text-amber-600 dark:text-amber-400 tracking-wide">
              &gt; <TypingRole variants={personalInfo.roleVariants} />
            </p>

            {/* Quote */}
            <blockquote className="mt-6 border-l-2 border-amber-500/50 pl-4 text-sm italic text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
              &ldquo;I bridge rigorous mathematical theory with real-world AI engineering — from stochastic analysis and optimization to deployed anomaly detection models.&rdquo;
            </blockquote>

            {/* Stat cards */}
            <StatCards />

            {/* Social + CV */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex gap-4">
                <SocialLink
                  href={personalInfo.social.github}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href={personalInfo.social.medium}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Follow on Medium"
                  icon={MediumIcon}
                />
                <SocialLink
                  href={personalInfo.social.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 transition hover:bg-amber-500/20 hover:border-amber-500/70"
              >
                <DownloadIcon className="h-3.5 w-3.5 stroke-current" />
                View CV
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* ── Main Grid ── */}
      <Container className="mt-10 pb-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:items-start">
          {/* Left: Articles */}
          <div className="flex flex-col gap-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))
            ) : (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Articles coming soon.</p>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-8 lg:pl-16 xl:pl-24">
            <Resume />
            <Education />
          </div>
        </div>
      </Container>
    </>
  )
}
