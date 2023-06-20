const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  roots: ["<rootDir>/src"],
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/__tests__/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  setupFiles: ["jest-canvas-mock"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js", "<rootDir>/src/__tests__/utils/setTestEnvVars.js"],
  testMatch: [
    "<rootDir>/src/__tests__/**/*.test.{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "/__tests__/utils/"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
