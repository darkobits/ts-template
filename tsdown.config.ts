import { defineConfig } from 'tsdown/config'

export default defineConfig({
  /**
   * Any TypeScript file (except for tests) in the source directory should be
   * considered an entry.
   *
   * See: https://tsdown.dev/options/entry
   */
  entry: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.{spec,test}.{ts,tsx,js,jsx}'],
  /**
   * Create an output file structure that mirrors the source file structure.
   *
   * See: https://tsdown.dev/options/unbundle
   */
  unbundle: true,
  /**
   * By default, tsdown has very intelligent defaults around what dependencies
   * to bundle, but this will ensure that all dependencies remain external to
   * the output.
   *
   * See:
   * - https://tsdown.dev/options/dependencies#default-behavior
   * - https://tsdown.dev/options/dependencies#skipping-node-modules-bundling
   */
  skipNodeModulesBundle: true,
  /**
   * Emit TypeScript declaration files.
   *
   * See: https://tsdown.dev/options/dts
   */
  dts: true,
  /**
   * This will keep the "main", "module", "types", and "exports" fields in
   * package.json updated to point to the correct output files based on the
   * `entry` option above.
   *
   * See: https://tsdown.dev/options/package-exports
   */
  exports: true,
  /**
   * Check for any package.json "dependencies" and "peerDependencies" that are
   * not imported anywhere in the build.
   *
   * Requires `unplugin-unused`.
   *
   * See:
   * - https://github.com/unplugin/unplugin-unused
   * - https://tsdown.dev/reference/api/Interface.UserConfig#unused
   */
  unused: true,
  /**
   * Run PubLint after building. This checks for common configuration issues in
   * package.json, ensuring it meets best practices. This can help catch errors
   * that may only arise after publishing, when a user tries to install the
   * package.
   *
   * Requires `publint`.
   *
   * See:
   * - https://publint.dev
   * - https://tsdown.dev/reference/api/Interface.UserConfig#publint
   */
  publint: true
})