#!/usr/bin/env node
/**
 * new-article.mjs — Portfolio Article Generator
 * 
 * Usage:
 *   node scripts/new-article.mjs "My Article Title"
 *   node scripts/new-article.mjs "Python Time Series" --date 2026-05-15
 * 
 * Creates a new MDX article with the correct folder structure and opens it.
 */

import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTICLES_DIR = path.join(__dirname, '..', 'src', 'pages', 'articles')

// ── Parse args ───────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('\n❌  Usage: node scripts/new-article.mjs "Your Article Title"\n')
  process.exit(1)
}

const dateArgIndex = args.indexOf('--date')
const today = new Date().toISOString().split('T')[0]
const articleDate = dateArgIndex !== -1 ? args[dateArgIndex + 1] : today
const titleArgs = dateArgIndex !== -1 ? args.slice(0, dateArgIndex) : args
const title = titleArgs.join(' ')

// ── Slug ─────────────────────────────────────────────────────────────────────

function toSlug(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const slug = toSlug(title)
const folderPath = path.join(ARTICLES_DIR, slug)

if (existsSync(folderPath)) {
  console.error(`\n❌  Article folder already exists: ${folderPath}\n`)
  process.exit(1)
}

// ── MDX Template ─────────────────────────────────────────────────────────────

const mdxContent = `import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = {
  author: 'Yassin Ezaouibi',
  date: '${articleDate}',
  title: '${title}',
  description:
    'TODO: Write a 1-2 sentence summary of the article for SEO and previews.',
}

export default (props) => <ArticleLayout meta={meta} {...props} />

## Introduction

TODO: Write your introduction here.

## Section 1

TODO: Body content.

## Section 2

TODO: More content.

## Conclusion

TODO: Wrap it up.
`

// ── Create & Open ─────────────────────────────────────────────────────────────

await mkdir(folderPath, { recursive: true })
const filePath = path.join(folderPath, 'index.mdx')
await writeFile(filePath, mdxContent, 'utf-8')

console.log(`\n✅  Article created!\n`)
console.log(`   Title  : ${title}`)
console.log(`   Date   : ${articleDate}`)
console.log(`   URL    : /articles/${slug}`)
console.log(`   File   : src/pages/articles/${slug}/index.mdx\n`)

// Try to open in VS Code or default editor
try {
  execSync(`code "${filePath}"`, { stdio: 'ignore' })
  console.log('   Opened in VS Code ✓\n')
} catch {
  try {
    execSync(`start "" "${filePath}"`, { stdio: 'ignore', shell: true })
    console.log('   Opened in default editor ✓\n')
  } catch {
    console.log(`   Open manually: ${filePath}\n`)
  }
}
