import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { skills, personalInfo } from '@/data/info'

// ─── Color map ────────────────────────────────────────────────────────────────

const colorMap = {
  violet: {
    badge: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    heading: 'text-zinc-700 dark:text-zinc-300',
    border: 'border-zinc-100 dark:border-zinc-700/40',
    headerBg: 'bg-zinc-50 dark:bg-zinc-800/30',
  },
  indigo: {
    badge: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    heading: 'text-zinc-700 dark:text-zinc-300',
    border: 'border-zinc-100 dark:border-zinc-700/40',
    headerBg: 'bg-zinc-50 dark:bg-zinc-800/30',
  },
  sky: {
    badge: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    heading: 'text-zinc-700 dark:text-zinc-300',
    border: 'border-zinc-100 dark:border-zinc-700/40',
    headerBg: 'bg-zinc-50 dark:bg-zinc-800/30',
  },
  emerald: {
    badge: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    heading: 'text-zinc-700 dark:text-zinc-300',
    border: 'border-zinc-100 dark:border-zinc-700/40',
    headerBg: 'bg-zinc-50 dark:bg-zinc-800/30',
  },
  zinc: {
    badge: 'bg-zinc-100 text-zinc-700 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700',
    heading: 'text-zinc-700 dark:text-zinc-300',
    border: 'border-zinc-100 dark:border-zinc-700/40',
    headerBg: 'bg-zinc-50 dark:bg-zinc-800/30',
  },
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

function SkillCard({ group }) {
  const c = colorMap[group.color]
  return (
    <div className={`rounded-2xl border overflow-hidden ${c.border}`}>
      {/* Card header */}
      <div className={`px-6 py-4 ${c.headerBg} border-b ${c.border}`}>
        <h2 className={`flex items-center gap-2.5 text-base font-bold ${c.heading}`}>
          <span className="text-xl leading-none">{group.emoji}</span>
          {group.category}
        </h2>
      </div>
      {/* Skill chips */}
      <div className="px-6 py-5">
        <div className="flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <span
              key={skill}
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${c.badge}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Learning Now section ─────────────────────────────────────────────────────

const currentlyLearning = [
  'Advanced Optimization Algorithms',
  'Bayesian Deep Learning',
  'Transformer Architectures',
  'MLflow / Experiment Tracking',
  'Financial Time Series Modeling',
  'Quantum ML (intro)',
]

function CurrentlyLearning() {
  return (
    <div className="mt-12 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-700/60 p-6">
      <h2 className="text-base font-bold text-zinc-700 dark:text-zinc-300 flex items-center gap-2 mb-4">
        <span>🚀</span> Currently Learning
      </h2>
      <div className="flex flex-wrap gap-2">
        {currentlyLearning.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-zinc-100 text-zinc-700 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        Continuously expanding my toolkit toward PFE internship readiness (Feb 2027).
      </p>
    </div>
  )
}

// ─── Skills Page ─────────────────────────────────────────────────────────────

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills — {personalInfo.name}</title>
        <meta
          name="description"
          content="Technical skills of Yassin Ezaouibi — Applied Mathematics, Machine Learning, Data Engineering, MLOps, and Software Engineering expertise for Data/AI internship roles."
        />
      </Head>
      <SimpleLayout
        title="Mathematical foundations. Real-world AI engineering."
        intro={`My skills span two worlds: the rigorous mathematical theory behind intelligent systems, and the practical engineering to bring those systems to production. Targeting a PFE internship in Data/ML/AI starting February 2027.`}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillCard key={group.category} group={group} />
          ))}
        </div>
        <CurrentlyLearning />
      </SimpleLayout>
    </>
  )
}
