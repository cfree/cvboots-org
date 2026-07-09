import { describe, expect, it, beforeAll } from 'vitest'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = resolve(import.meta.dirname, '..')
const clientIndexHtml = resolve(rootDir, 'dist/client/index.html')

describe('production build', () => {
  beforeAll(() => {
    rmSync(resolve(rootDir, 'dist'), { recursive: true, force: true })
    execFileSync('pnpm', ['build'], { cwd: rootDir, stdio: 'inherit' })
  }, 60_000)

  it('prerenders the landing route to static HTML with the page content already in the markup', () => {
    expect(existsSync(clientIndexHtml)).toBe(true)
    const html = readFileSync(clientIndexHtml, 'utf-8')
    expect(html).toContain('Bootblacks Stand Together')
  })
})
