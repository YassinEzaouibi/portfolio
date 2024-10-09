import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
      <Section {...props}>
        <ul role="list" className="space-y-16">
          {children}
        </ul>
      </Section>
  )
}

function Tool({ title, href, children }) {
  return (
      <Card as="li">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Description>{children}</Card.Description>
      </Card>
  )
}

export default function Tools() {
  return (
      <>
        <Head>
          <title>My Development Setup - Yassin Ezaouibi</title>
          <meta
              name="description"
              content="The essential tools and platforms I use for coding, productivity, and continuous learning in software development on Linux Ubuntu."
          />
        </Head>
        <SimpleLayout
            title="My essential toolkit for coding, productivity, and learning on Linux Ubuntu"
            intro="As a developer working on Linux Ubuntu, I'm often asked about the tools and resources I rely on. Here's a curated list of the software, productivity apps, and learning platforms that keep me efficient, focused, and continuously improving my skills in the Linux environment."
        >
          <div className="space-y-20">
            <ToolsSection title="Operating System">
              <Tool title="Linux Ubuntu">
                My primary operating system, offering a perfect balance of stability, flexibility, and a rich ecosystem for development.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Workstation">
              <Tool title="Dell Latitude E7450">
                My trusty workstation with an Intel i5 6th generation processor, 512GB SSD, and 16GB RAM.
                It runs Linux Ubuntu smoothly and handles all my development tasks with ease.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Development tools">
              <Tool title="IntelliJ IDEA">
                A powerful IDE for Java development, with great support for other languages and frameworks. The Linux version works flawlessly.
              </Tool>
              <Tool title="WebStorm">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                JetBrains' IDE specifically tailored for web development, making JavaScript and related technologies a breeze to work with on Ubuntu.
              </Tool>
              <Tool title="Visual Studio Code">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                A versatile, lightweight code editor that's become indispensable in my Ubuntu setup, especially for quick edits and working with various languages.
              </Tool>
              <Tool title="Postman">
                Essential tool for API development and testing, making it easy to send requests and analyze responses. Works great on Linux.
              </Tool>
              <Tool title="Git">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Version control system that's integral to my workflow, with seamless integration in the Ubuntu terminal.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Terminal and Shell">
              <Tool title="Terminator">
                A powerful terminal emulator for Linux that allows splitting the window into multiple terminals.
              </Tool>
              <Tool title="Zsh with Oh My Zsh">
                My preferred shell with added functionality and theming capabilities, making command-line work more efficient and visually appealing.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Productivity">
              <Tool title="Notion">
                All-in-one workspace for note-taking, project management, and collaboration. I use the web version on Ubuntu.
              </Tool>
              <Tool title="KeePassXC">
                An open-source password manager that works great on Linux, helping me maintain strong, unique passwords for all my accounts.
              </Tool>
              <Tool title="Flameshot">
                A feature-rich screenshot tool for Linux that allows quick edits and annotations.
              </Tool>
            </ToolsSection>
            <ToolsSection title="Communication">
              <Tool title="Slack">
                For team communication and collaboration, with a native Linux client.
              </Tool>
              <Tool title="Zoom">
                For video conferencing, which now has improved Linux support.
              </Tool>
            </ToolsSection>
            <ToolsSection title="AI and Learning">
              <Tool title="Claude">
                An AI assistant that helps with various tasks, from coding to writing and analysis. Accessible via web interface on Ubuntu.
              </Tool>
              <Tool title="ChatGPT">
                Another powerful AI platform for generating ideas, answering questions, and assisting with various tasks.
              </Tool>
              <Tool title="Khan Academy">
                An excellent resource for learning various subjects, particularly useful for brushing up on math and science concepts.
              </Tool>
              <Tool title="Frontend Masters">
                In-depth courses on frontend development, helping me stay up-to-date with the latest web technologies and best practices.
              </Tool>
            </ToolsSection>
          </div>
        </SimpleLayout>
      </>
  )
}