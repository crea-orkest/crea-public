// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babel: true,
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
}

export default config
