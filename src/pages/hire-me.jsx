import { useState } from "react"
import portraitImage from '@/pages/img_1.png'
import Image from "next/image";
import {Button} from "@/components/Button";

export default function HireMeTailwind() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsSubmitting(true)

        // Simulating form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        event.currentTarget.reset()
    }

    const skills = [
        "React",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
    ]

    return (
      <div className="relative mt-16 flex min-h-screen items-center justify-center overflow-hidden p-4 text-zinc-900 dark:text-zinc-100">
        <div className="relative z-10 mx-auto w-full max-w-4xl rounded-lg border border-zinc-100  backdrop-blur-sm dark:border-zinc-700/40">
          <div className="grid gap-6 p-8 md:grid-cols-2">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className=" rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Yassin Ezaouibi
                  </h2>
                  <p className="text-zinc-900 dark:text-zinc-100">
                    I am open to work as a freelancer in{' '}
                    <span className="font-bold italic">web development</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/*<div className="rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40">*/}
            <div className="md:rounded-lg md:border md:border-zinc-100 md:p-6 md:dark:border-zinc-700/40">
              <h2 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Connect with Me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                      htmlFor="project-details"
                      className="block text-sm font-medium"
                  >
                    Project Details
                  </label>
                  <textarea
                      id="project-details"
                      placeholder="Can you briefly describe the project and its main purpose?"
                      className="min-h-[80px] w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                  <p className="text-xs text-zinc-900 dark:text-zinc-100">
                    Minimum 50 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <label
                      htmlFor="target-date"
                      className="block text-sm font-medium"
                  >
                    Target Date
                  </label>
                  <select
                      id="target-date"
                      className="w-full rounded-lg border-gray-300 bg-gray-100 p-2.5 text-sm text-zinc-400 dark:bg-zinc-800 dark:placeholder-gray-400"
                      required
                  >
                    <option selected>
                      When you need the project to be completed
                    </option>
                    <option value="few-days">Within the next few days</option>
                    <option value="few-weeks">Within the next few weeks</option>
                    <option value="month-or-more">In a month or more</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                      htmlFor="project-budget"
                      className="block text-sm font-medium"
                  >
                    Project Budget
                  </label>
                  <input
                      id="project-budget"
                      type="number"
                      placeholder="What is your budget for this project?"
                      min="100"
                      step="50"
                      className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                </div>
                <div className="space-y-2">
                  <label
                      htmlFor="technology-preferences"
                      className="block text-sm font-medium"
                  >
                    Technology Preferences
                  </label>
                  <textarea
                      id="technology-preferences"
                      placeholder="Do you have any specific technology preferences, or should I suggest the best stack for this project?"
                      className="min-h-[80px] w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                </div>

                <Button
                    type="submit"
                    variant="secondary"
                    className="group mt-6 w-full bg-gray-100"
                >
                  Join
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}