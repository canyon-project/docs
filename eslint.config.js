import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'public',
    'build',
    'dist',
    'node_modules',
    'coverage',
    'src/assets/**',
  ],
  stylistic: {},
  jsonc: true,
  formatters: {
    markdown: true,
  },
  typescript: true,
  react: true,
  markdown: true,
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  rules: {},
})
