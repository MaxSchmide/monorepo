import type { Config } from 'jest'

const config: Config = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testTimeout: 30000,
  moduleNameMapper: {
    '^src/(.+\\.json)$': '<rootDir>/$1',
    '^src/(.*)$': '<rootDir>/$1.ts',
    '#node-web-compat': './node-web-compat-node.js',
  },
  rootDir: 'src',
  testRegex: '^(?!.*.u.spec.ts$).*.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  transformIgnorePatterns: ['^.+\\.js$'],
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: '@quramy/jest-prisma-node/environment',
  setupFilesAfterEnv: ['@quramy/prisma-fabbrica/scripts/jest-prisma'],
  testPathIgnorePatterns: ['node_modules/', 'dist/'],
  testEnvironmentOptions: {
    databaseUrl:
      'postgresql://postgres:db_password@localhost:5432/postgres?schema=public&connection_limit=25',
  },
}

export default config
