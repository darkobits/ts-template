import eslint from '@darkobits/eslint-config'
import packageJsonPlugin from 'eslint-plugin-package-json'

export default eslint.config({
  ignores: ['dist/**'],
  extends: [
    ...eslint.configs.ts,
    packageJsonPlugin.configs.recommended
  ]
})