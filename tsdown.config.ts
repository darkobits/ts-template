import { defineConfig } from 'tsdown/config'

export default defineConfig({
  /**
   * Any TypeScript file (except for tests) in the source directory should be
   * considered an entry.
   *
   * @see https://tsdown.dev/reference/config-options#entry
   */
  entry: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.{spec,test}.{ts,tsx,js,jsx}'],
  /**
   * Do not bundle output into a single file. Instead, use the same directory
   * structure as source files.
   *
   * @see https://tsdown.dev/reference/config-options#unbundle
   */
  unbundle: true,
  /**
   * Check for unused dependencies with `unplugin-unused`.
   *
   * @see https://tsdown.dev/reference/config-options#unused
   */
  unused: true,
  /**
   * After building, run `publint`.
   *
   * @see https://tsdown.dev/reference/config-options#publint
   */
  publint: true,
  /**
   * Emit TypeScript declaration files (.d.ts).
   */
  dts: true,
  /**
   * Automatically keeps the `main`, `module`, `types`, and `exports` fields in
   * package.json in sync with the correct files in the output directory.
   *
   * @see https://tsdown.dev/reference/config-options#exports
   */
  exports: true
})
