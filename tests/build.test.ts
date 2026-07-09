import { describe, expect, it, beforeAll } from 'vitest'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = resolve(import.meta.dirname, '..')
const clientIndexHtml = resolve(rootDir, 'dist/client/index.html')

describe('production build', () => {
  beforeAll(() => {
    rmSync(resolve(rootDir, 'dist'), { recursive: true, force: true })
    execFileSync('pnpm', ['build'], {
      cwd: rootDir,
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production' },
    })
  }, 60_000)

  it('prerenders the landing route to static HTML with the page content already in the markup', () => {
    expect(existsSync(clientIndexHtml)).toBe(true)
    const html = readFileSync(clientIndexHtml, 'utf-8')
    expect(html).toContain('Bootblacks Stand Together')
  })

  it('injects the gtag.js snippet for G-MNB8N157DQ into the prerendered page head', () => {
    const html = readFileSync(clientIndexHtml, 'utf-8')
    expect(html).toContain(
      '<script src="https://www.googletagmanager.com/gtag/js?id=G-MNB8N157DQ" async',
    )
    expect(html).toContain("gtag('config','G-MNB8N157DQ')")
  })

  it('statically exposes the Netlify Forms signup form in the prerendered markup', () => {
    const html = readFileSync(clientIndexHtml, 'utf-8')
    expect(html).toContain('name="signup"')
    expect(html).toContain('data-netlify="true"')
    expect(html).toContain('data-netlify-honeypot="bot-field"')
    expect(html).toContain('name="bot-field"')
  })

  it('sets SEO title, meta description, favicon, and Open Graph/Twitter tags in the prerendered head', () => {
    const html = readFileSync(clientIndexHtml, 'utf-8')
    expect(html).toContain(
      '<title>Coachella Valley Bootblack Association — Bootblacks Stand Together</title>',
    )
    expect(html).toContain(
      'name="description" content="CVBA keeps the bootblack tradition alive',
    )
    expect(html).toContain('rel="icon"')
    expect(html).toContain('href="/favicon.png"')
    expect(html).toContain('rel="apple-touch-icon"')
    expect(html).toContain('property="og:title"')
    expect(html).toContain('property="og:description"')
    expect(html).toContain('property="og:image" content="')
    expect(html).toContain('og-image.png')
    expect(html).toContain('name="twitter:card" content="summary_large_image"')
  })
})
