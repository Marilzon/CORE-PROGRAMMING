export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: "v8",
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
};
