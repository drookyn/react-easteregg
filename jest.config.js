module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.test\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setup/setupEnzyme.js',
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup/',
  ],
  testMatch: [
    '<rootDir>/(__tests__/**/*.test.(js|jsx|ts|tsx))',
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};
