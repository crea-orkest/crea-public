export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 1000],
    'footer-max-line-length': [2, 'always', 1000],
  },
}