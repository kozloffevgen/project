module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/v-on-event-hyphenation': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
  }
}