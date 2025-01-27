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

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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

export default function About() {
  return (
    <>
      <Head>
        <title>About - Yassin Ezaouibi</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Yassin Ezaouibi, a Machine Learning Student from Morocco.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                <span className="italic font-bold text-xl text-zinc-600 dark:text-zinc-200">My Journey</span><br/>
                I’ve always loved turning ideas into reality through technology. Starting with simple projects in high school, I discovered a passion for building tools that solve real problems. Over time, I shifted from science to software development, where creativity meets logic, and never looked back.
              </p>
              <p>
                <span className="italic font-bold text-xl text-zinc-600 dark:text-zinc-200">Building Solutions</span><br/>
                My work revolves around creating user-friendly web applications that are both powerful and reliable. I enjoy designing smooth experiences for users while ensuring the systems behind them are strong and secure. From crafting interfaces to connecting data and services, every step excites me.

              </p>
              <p>
                <span className="italic font-bold text-xl text-zinc-600 dark:text-zinc-200">Exploring New Frontiers</span><br />
                Today, I’m diving into the world of artificial intelligence and machine learning. I’m fascinated by how data and smart algorithms can tackle complex challenges, and I write about these topics to share ideas and inspire others. This journey reflects my belief that learning never stops—whether through coding, writing, or experimenting with new technologies.
              </p>

              <p>
                <span className="italic font-bold text-xl text-zinc-600 dark:text-zinc-200"> Looking Ahead</span><br/>
                My goal is to keep creating tools that make a difference. I want to blend creativity with problem-solving to help people and businesses succeed in a fast-changing digital world. Every project is a chance to learn, grow, and push what’s possible.

              </p>

            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                  href="https://github.com/YassinEzaouibi"
                  icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                  href="https://medium.com/@ezaouibiyassin"
                  icon={MediumIcon} className="mt-4">
                Follow on Medium
              </SocialLink>
              <SocialLink
                  href="https://www.linkedin.com/in/ezaouibi-yassin/"
                  icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:zouibiyassin03@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                zouibiyassin03@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
