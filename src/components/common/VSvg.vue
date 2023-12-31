<template>
  <svg class="v-svg" :class="className" xmlns="http://www.w3.org/2000/svg">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink"/>
  </svg>
</template>

<script>
export default {
  name: 'VSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: '16px',
    },
    height: {
      type: String,
      default: '16px',
    },
    button: {
      type: Boolean,
    },
  },
  computed: {
    iconPath() {
      let icon = require(`@/assets/svg/ui/${this.name}.svg`);

      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default;
      }

      return icon.url;
    },
    className() {
      return {
        'v-svg__type_button': this.button, 
      };
    },
  },
};
</script>

<style lang="less" scoped>
  .v-svg {
    fill: currentColor;
    width: v-bind(width);
    height: v-bind(height);

    &__type {
      &_button {
        cursor: pointer;
      }
    }
  }
</style>