module.exports = {
  verbose: true,
  rootDir: '.',
  restoreMocks: true,
  // testEnvironment: 'node',
  testRegex: '(/test/).+(.unit.spec.js)',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
  ],
  coverageDirectory: '<rootDir>/reports/coverage/unit',
  coverageReporters: ['cobertura', 'lcov', 'text', 'text-summary'],
  roots: ['<rootDir>', '<rootDir>/src', '<rootDir>/test'],
  // transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  reporters: [
    "default",
    [
      "jest-junit", {
      suiteName: "Data structures and Algorithms",
      outputDirectory: "./reports/test",
      outputName: "unit.xml"
    }]
  ]
};