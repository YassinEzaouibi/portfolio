import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/data/info'
import { useState } from 'react'

// ─── Icons ────────────────────────────────────────────────────────────────────

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

// ─── Type filter ──────────────────────────────────────────────────────────────

const ALL_TYPES = ['All', 'AI/ML', 'Web']

const typeColorMap = {
  'AI/ML': 'bg-zinc-800 text-zinc-100 ring-zinc-700 dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-600',
  'Web':   'bg-zinc-100 text-zinc-600 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700',
}

const techClass = 'bg-zinc-100 text-zinc-600 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700'

function techColor() {
  return techClass
}

// ─── Projects Page ────────────────────────────────────────────────────────────

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.type === filter)

  return (
    <>
      <Head>
        <title>Projects — Yassin Ezaouibi</title>
        <meta
          name="description"
          content="Projects by Yassin Ezaouibi — AI/ML systems including anomaly detection for energy consumption time series, and full-stack web applications."
        />
      </Head>
      <SimpleLayout
        title="Things I've built — from anomaly detection models to full-stack apps."
        intro="My work spans end-to-end AI engineering (time series anomaly detection, energy consumption analysis) and full-stack development. AI/ML projects are featured first — they reflect my current focus as a Master's student in Applied Mathematics & Machine Intelligence."
      >
        {/* Filter tabs */}
        <div className="mb-10 flex gap-2 flex-wrap">
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              id={`filter-${type.toLowerCase().replace('/', '-')}`}
              onClick={() => setFilter(type)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                filter === type
                  ? 'bg-amber-500 text-white shadow-sm dark:bg-amber-500'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <Card as="li" key={project.name} className="group">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>

              {/* Type badge */}
              {project.type && (
                <div className="mt-4">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${typeColorMap[project.type] ?? ''}`}>
                    {project.featured && '⭐ '}{project.type}
                  </span>
                </div>
              )}

              <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                  {project.name}
                </a>
              </h2>
              <Card.Description>{project.description}</Card.Description>

              {/* Tech stack tags */}
              {project.techStack && (
                <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${techColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <p className="relative z-10 mt-5 flex text-sm font-medium text-zinc-400 transition group-hover:text-amber-500 dark:text-zinc-200 dark:group-hover:text-amber-400">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">
                  <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                    {project.link.label}
                  </a>
                </span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}