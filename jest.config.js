export default {
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest', // this is for our code because we are using es6 modules
  },
  setupFiles: ['./jest.setup.js'],
};
