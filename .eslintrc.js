module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/v-on-event-hyphenation': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/order-in-components': 'error',
    'vue/this-in-template': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-indent': 'error',
    'vue/first-attribute-linebreak': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3
      },      
    }],
    'vue/max-len': ['error', {
      'code': 120,
      'template': 120,
      'tabWidth': 2,
      'comments': 120,
    }],
  },
};
