module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/tests/unit/**/*.test.[jt]s?(x)'],
  transformIgnorePatterns: ['/node_modules/(?!lodash-es)'],
};
