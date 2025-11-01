import { defineConfig, globalIgnores } from 'eslint/config'
import eslintNextPlugin from '@next/eslint-plugin-next'
import testingLibrary from 'eslint-plugin-testing-library'
import nextVitals from 'eslint-config-next/core-web-vitals'

export const eslintConfig = {
  plugins: {
    next: eslintNextPlugin,
    'testing-library': testingLibrary,
  },
  rules: {
    'require-await': ['warn'],
    'no-unused-vars': ['warn'],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
}

export default defineConfig([
  globalIgnores(['.next', 'node_modules']),
  ...nextVitals,
  eslintConfig,
])
