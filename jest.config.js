module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  moduleFileExtensions: ['js', 'ts', 'json'],
  setupFiles: ['./test/setup.js'],
  globals: {
    'ts-jest': {
      tsConfig: 'test/tsconfig.json'
    }
  }
};
