module.exports = {
  // preset: 'react-native',
  verbose: true,
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)(spec|test).js?(x)'],
  rootDir: '../',
  transform: {
    '^.+\\.js$': '<rootDir>/test/jest.transform.js'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 100,
      statements: 100,
      functions: 100
    }
  }
}
