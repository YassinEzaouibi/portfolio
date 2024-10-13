import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import {Code, Database, FileJson, Globe, Palette, Server} from "lucide-react"

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  MediumIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import logoIdaTech from '@/images/logos/idaTech.svg'
import logoJobInTech from '@/images/logos/jobInTech.svg'
import logoRedGato from '@/images/logos/redgato-favicon.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import {useEffect} from "react";

import { useState } from 'react'
import {subscribeUser} from "@/services/newsletterService";
import {useRouter} from "next/compat/router";

function MailIcon(props) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          {...props}
      >
        <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
  )
}

function BriefcaseIcon(props) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          {...props}
      >
        <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
  )
}

function ArrowDownIcon(props) {
  return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  )
}

const technologies = [
  { name: "Java", icon: <Code className="w-6 h-6" /> },
  { name: "Angular", icon: <Globe className="w-6 h-6" /> },
  { name: "JavaScript", icon: <FileJson className="w-6 h-6" /> },
  { name: "HTML5", icon: <Globe className="w-6 h-6" /> },
  { name: "CSS3", icon: <Palette className="w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
  { name: "SQL", icon: <Database className="w-6 h-6" /> },
]
function TechStackGrid() {
  return (
      <section className="bg-black py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white">Technologies</h2>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-teal-400">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

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

function Newsletter() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await subscribeUser({ name, email });
            router.push(`/thank-you?name=${encodeURIComponent(name)}`);
        } catch (error) {
            alert("Subscription failed. Please try again");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
        >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <MailIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
            </p>

            {/* Name Input */}
            <div className="mt-6 flex">
                <input
                    type="text"
                    placeholder="Full name"
                    aria-label="Full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
            </div>

            {/* Email Input */}
            <div className="mt-4 flex">
                <input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />
            </div>
                <Button
                    type="submit"
                    variant="secondary"
                    className="group mt-6 w-full"
                >
                    Join
                </Button>
        </form>
    );
}

function Resume() {

  let resume = [
    {
      company: 'IDEA TECH (Internship)',
      title: 'Full Stack Developer (MERN)',
      type: 'Internship',
      logo: logoIdaTech,
      start: '6-1-2024',
      end: '9-1-2024',
    },
    {
      company: 'JobInTech - Simplon (Bootcamp)',
      title: 'Backend Developer (Java)',
      type: 'Bootcamp',
      logo: logoJobInTech,
      start: '12-4-2023',
      end: '5-9-2024',
    },
    {
      company: 'redgato (Internship)',
      title: 'Full Stack Developer (Java - Angular)',
      type: 'Internship',
      logo: logoRedGato,
      start: '5-15-2023',
      end: '9-8-2023',
    },
  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Internships and Bootcamps</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
              <li key={roleIndex} className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                  </dd>

                  <dt className="sr-only">Date</dt>
                  <dd
                      className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                      aria-label={`${role.start.label ?? role.start} until ${
                          role.end.label ?? role.end
                      }`}
                  >
                    <time dateTime={role.start.dateTime ?? role.start}>
                      {role.start.label ?? role.start}
                    </time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={role.end.dateTime ?? role.end}>
                      {role.end.label ?? role.end}
                    </time>
                  </dd>
                </dl>
              </li>
          ))}
        </ol>
        <Button
            href="/yassin-ezaouibi-resume.pdf"
            variant="secondary"
            className="group mt-6 w-full"
        >
          Download CV
          <ArrowDownIcon className="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
  )
}

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



export default function Home({ articles }) {
    useEffect(() => {
        // Any client-side only code can go here
    }, [])
  return (
      <>
        <Head>
          <title>Yassin Ezaouibi</title>
          <meta
              name="description"
              content="I’m Yassin Ezaouibi, a software Developer based in Casablanca."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container className="mt-9">
          <div className="max-w-full">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl ">
              Software Developer,
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I’m Yassin Ezaouibi, a software developer based in Casablanca
              Morocco. I specialize in creating scalable, high-performance web
              applications. My passion lies in delivering seamless user
              experiences while building robust backend systems. I am committed to
              developing software solutions that empower businesses and
              individuals to thrive in the digital landscape.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                  href="https://github.com/YassinEzaouibi"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
              />
              <SocialLink
                  href="https://medium.com/@ezaouibiyassin"
                  aria-label="Follow on Medium"
                  icon={MediumIcon}
              />
              <SocialLink
                  href="https://www.linkedin.com/in/ezaouibi-yassin/"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
              />
            </div>
          </div>
        </Container>
        {/*<Photos />*/}
        <Container className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                  <Article key={article.slug} article={article} />
              ))}
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
              <Newsletter />
              {/*<TechStackGrid />*/}
            </div>
          </div>
        </Container>
      </>
  )
}

