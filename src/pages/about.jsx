import Image from 'next/future/image'
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
              I’m Yassin Ezaouibi, a full-stack developer from Casablanca, Morocco.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                with a passion for creating powerful and intuitive web applications.
                From an early age, I was fascinated by how things work, and my
                love for technology started with a high school interest in programming.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                It didn't take long for me to start building small projects, fueled by
                the curiosity that has continued to drive my career.
              </p>
              <p>
                While I initially studied the sciences, it was in web development that
                I found my calling. In 2023, during an internship at Redgato, I contributed
                to platforms like Dentalix, which streamlines the ordering process for
                dentists, and Anomalia, an anomaly detection system for water dams
                utilizing AI. This experience gave me the opportunity to dive deep into
                full-stack web development, particularly with Java Spring Boot and Angular.
              </p>
              <p>
                Following this, I completed a structured bootcamp program that allowed
                me to sharpen my technical skills and develop over 10 concrete web projects.
                Through this training, I specialized in Java Spring Boot and Angular,
                enhancing my expertise in both front-end and back-end development.
              </p>
              <p>
                Recently, I completed a three-month internship at ID&A TECH,
                where I contributed to several web development projects.
                Under their supervision, I worked on both front-end and back-end
                tasks, focusing on creating high-performance applications,
                developing prototypes, and conducting rigorous testing to ensure
                the quality and security of the final products. My work included
                designing user interfaces using React, integrating RESTful APIs,
                and managing databases with MongoDB. I also collaborated on
                full-stack development using the MERN stack
                (MongoDB, Express.js, React, Node.js).
              </p>
              <p>
                Today, I’m focused on combining creativity, adaptability, and
                strong technical skills in languages like Java, TypeScript, and
                frameworks like Spring and Angular, to build the next generation
                of applications. My recent experiences have deepened my
                knowledge, and I’m committed to pushing the boundaries of
                web technology to continue contributing to meaningful,
                cutting-edge projects.
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
