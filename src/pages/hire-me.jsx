import { useState } from 'react';
import portraitImage from '@/images/avatar.jpg';
import Image from "next/image";
import { Button } from "@/components/Button";
import {useRouter} from "next/compat/router";

export default function HireMe() {
  const [formData, setFormData] = useState({
    projectDetails: '',
    targetDate: '',
    projectBudget: '',
    technologyPreferences: '',
    email: '',
    fullName: ''
  });
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }
  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectDetails) {
      newErrors.projectDetails = 'Project Details are required';
    } else if (formData.projectDetails.length < 50) {
      newErrors.projectDetails = 'Project Details must be at least 50 characters';
    }
    if (!formData.targetDate) newErrors.targetDate = 'Target Date is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData))
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch('https://port-back-o91c.onrender.com/email/contact', {
      // const response = await fetch('http://localhost:5000/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(`/contact-success?name=${encodeURIComponent(formData.fullName)}`);
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
  ];

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
                    className="rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
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
            <div className="md:rounded-lg md:border md:border-zinc-100 md:p-6 md:dark:border-zinc-700/40">
              <h2 className="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Connect with Me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div >
                  <label
                      htmlFor="projectDetails"
                      className="pb-2 block text-sm font-medium"
                  >
                    Project Details
                    <span className="text-red-500"> *</span>
                  </label>
                  <textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Can you briefly describe the project and its main purpose?"
                      className="min-h-[70px] w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                  {errors.projectDetails && <p className="text-red-500 text-xs">{errors.projectDetails}</p>}
                  <p className="text-xs text-zinc-900 dark:text-zinc-100">
                    Minimum 50 characters
                  </p>
                </div>
                <div className="space-y-2">
                  <label
                      htmlFor="targetDate"
                      className="block text-sm font-medium"
                  >
                    Target Date
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                      id="targetDate"
                      value={formData.targetDate}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-300 bg-gray-100 p-2.5 text-sm text-zinc-400 dark:bg-zinc-800 dark:placeholder-gray-400"
                      required
                  >
                    <option value="" disabled>
                      When you need the project to be completed
                    </option>
                    <option value="few-days">Within the next few days</option>
                    <option value="few-weeks">Within the next few weeks</option>
                    <option value="month-or-more">In a month or more</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                  {errors.targetDate && <p className="text-red-500 text-xs">{errors.targetDate}</p>}
                </div>

                <div className="space-y-2">
                  <label
                      htmlFor="projectBudget"
                      className="block text-sm font-medium"
                  >
                    Project Budget
                  </label>
                  <input
                      id="projectBudget"
                      type="number"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      placeholder="What is your budget for this project?"
                      min="100"
                      step="50"
                      className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                      htmlFor="technologyPreferences"
                      className="block text-sm font-medium"
                  >
                    Technology Preferences
                  </label>
                  <textarea
                      id="technologyPreferences"
                      value={formData.technologyPreferences}
                      onChange={handleChange}
                      placeholder="Do you have any specific technology preferences, or should I suggest the best stack for this project?"
                      className="min-h-[70px] w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                    <span className="text-red-500"> *</span>
                  </label>
                  <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium">
                    Full Name
                    <span className="text-red-500"> *</span>
                  </label>
                  <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-black dark:bg-zinc-800 dark:text-white"
                      required
                  />
                  {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
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
  );
}