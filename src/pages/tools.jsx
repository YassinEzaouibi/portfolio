// /*
// import Head from 'next/head'
//
// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'
//
// function ToolsSection({ children, ...props }) {
//   return (
//     <Section {...props}>
//       <ul role="list" className="space-y-16">
//         {children}
//       </ul>
//     </Section>
//   )
// }
//
// function Tool({ title, href, children }) {
//   return (
//     <Card as="li">
//       <Card.Title as="h3" href={href}>
//         {title}
//       </Card.Title>
//       <Card.Description>{children}</Card.Description>
//     </Card>
//   )
// }
//
// export default function Tools() {
//   return (
//     <>
//       <Head>
//         <title>Uses - Yassin Ezaouibi</title>
//         <meta
//           name="description"
//           content="Software I use, gadgets I love, and other things I recommend."
//         />
//       </Head>
//       <SimpleLayout
//         title="Software I use, gadgets I love, and other things I recommend."
//         intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
//       >
//         <div className="space-y-20">
//           <ToolsSection title="Workstation">
//             <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
//               I was using an Intel-based 16” MacBook Pro prior to this and the
//               difference is night and day. I’ve never heard the fans turn on a
//               single time, even under the incredibly heavy loads I put it
//               through with our various launch simulations.
//             </Tool>
//             <Tool title="Apple Pro Display XDR (Standard Glass)">
//               The only display on the market if you want something HiDPI and
//               bigger than 27”. When you’re working at planetary scale, every
//               pixel you can get counts.
//             </Tool>
//             <Tool title="IBM Model M SSK Industrial Keyboard">
//               They don’t make keyboards the way they used to. I buy these any
//               time I see them go up for sale and keep them in storage in case I
//               need parts or need to retire my main.
//             </Tool>
//             <Tool title="Apple Magic Trackpad">
//               Something about all the gestures makes me feel like a wizard with
//               special powers. I really like feeling like a wizard with special
//               powers.
//             </Tool>
//             <Tool title="Herman Miller Aeron Chair">
//               If I’m going to slouch in the worst ergonomic position imaginable
//               all day, I might as well do it in an expensive chair.
//             </Tool>
//           </ToolsSection>
//           <ToolsSection title="Development tools">
//             <Tool title="Sublime Text 4">
//               I don’t care if it’s missing all of the fancy IDE features
//               everyone else relies on, Sublime Text is still the best text
//               editor ever made.
//             </Tool>
//             <Tool title="iTerm2">
//               I’m honestly not even sure what features I get with this that
//               aren’t just part of the macOS Terminal but it’s what I use.
//             </Tool>
//             <Tool title="TablePlus">
//               Great software for working with databases. Has saved me from
//               building about a thousand admin interfaces for my various projects
//               over the years.
//             </Tool>
//           </ToolsSection>
//           <ToolsSection title="Design">
//             <Tool title="Figma">
//               We started using Figma as just a design tool but now it’s become
//               our virtual whiteboard for the entire company. Never would have
//               expected the collaboration features to be the real hook.
//             </Tool>
//           </ToolsSection>
//           <ToolsSection title="Productivity">
//             <Tool title="Alfred">
//               It’s not the newest kid on the block but it’s still the fastest.
//               The Sublime Text of the application launcher world.
//             </Tool>
//             <Tool title="Reflect">
//               Using a daily notes system instead of trying to keep things
//               organized by topics has been super powerful for me. And with
//               Reflect, it’s still easy for me to keep all of that stuff
//               discoverable by topic even though all of my writing happens in the
//               daily note.
//             </Tool>
//             <Tool title="SavvyCal">
//               Great tool for scheduling meetings while protecting my calendar
//               and making sure I still have lots of time for deep work during the
//               week.
//             </Tool>
//             <Tool title="Focus">
//               Simple tool for blocking distracting websites when I need to just
//               do the work and get some momentum going.
//             </Tool>
//           </ToolsSection>
//         </div>
//       </SimpleLayout>
//     </>
//   )
// }
// */
//
// import Head from 'next/head'
//
// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'
//
// function ToolsSection({ children, ...props }) {
//   return (
//       <Section {...props}>
//         <ul role="list" className="space-y-16">
//           {children}
//         </ul>
//       </Section>
//   )
// }
//
// function Tool({ title, href, children }) {
//   return (
//       <Card as="li">
//         <Card.Title as="h3" href={href}>
//           {title}
//         </Card.Title>
//         <Card.Description>{children}</Card.Description>
//       </Card>
//   )
// }
//
// export default function Tools() {
//   return (
//       <>
//         <Head>
//           <title>My Development Setup - Yassin Ezaouibi</title>
//           <meta
//               name="description"
//               content="The essential tools and platforms I use for coding, productivity, and continuous learning in software development."
//           />
//         </Head>
//         <SimpleLayout
//             title="My essential toolkit for coding, productivity, and learning"
//             intro="As a developer, I'm often asked about the tools and resources I rely on. Here's a curated list of the software, productivity apps, and learning platforms that keep me efficient, focused, and continuously improving my skills."
//         >
//           <div className="space-y-20">
//             <ToolsSection title="Workstation">
//               <Tool title="Dell Latitude E7450">
//                 My trusty workstation with an Intel i5 6th generation processor, 512GB SSD, and 16GB RAM.
//                 It's been reliable for all my development needs.
//               </Tool>
//             </ToolsSection>
//             <ToolsSection title="Development tools">
//               <Tool title="IntelliJ IDEA">
//                 A powerful IDE for Java development, with great support for other languages and frameworks.
//               </Tool>
//               <Tool title="WebStorm">
//                 JetBrains' IDE specifically tailored for web development, making JavaScript and related technologies a breeze to work with.
//               </Tool>
//               <Tool title="Postman">
//                 Essential tool for API development and testing, making it easy to send requests and analyze responses.
//               </Tool>
//             </ToolsSection>
//             <ToolsSection title="Productivity">
//               <Tool title="Notion">
//                 All-in-one workspace for note-taking, project management, and collaboration. It's become an integral part of my workflow.
//               </Tool>
//               <Tool title="PomoFocus">
//                 A Pomodoro timer that helps me stay focused and manage my work sessions effectively.
//               </Tool>
//               <Tool title="Noisli">
//                 Ambient noise generator that helps create the perfect atmosphere for concentration and productivity.
//               </Tool>
//             </ToolsSection>
//             <ToolsSection title="AI and Learning">
//               <Tool title="Claude">
//                 An AI assistant that helps with various tasks, from coding to writing and analysis.
//               </Tool>
//               <Tool title="ChatGPT">
//                 Another powerful AI platform for generating ideas, answering questions, and assisting with various tasks.
//               </Tool>
//               <Tool title="Khan Academy">
//                 An excellent resource for learning various subjects, particularly useful for brushing up on math and science concepts.
//               </Tool>
//               <Tool title="Frontend Masters">
//                 In-depth courses on frontend development, helping me stay up-to-date with the latest web technologies and best practices.
//               </Tool>
//             </ToolsSection>
//           </div>
//         </SimpleLayout>
//       </>
//   )
// }

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
              {/*<Tool title="Linux Academy">*/}
              {/*  An online learning platform specifically for Linux and cloud technologies, perfect for deepening my Ubuntu and general Linux knowledge.*/}
              {/*</Tool>*/}
            </ToolsSection>
          </div>
        </SimpleLayout>
      </>
  )
}