<template>
  <button
    class="v-button"
    :type="btnType"
    @click="$emit('btnClick', $event)"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    btnType: {
      type: String,
      default: 'button',
      validator: (val) => ['button', 'submit'].includes(val),
    },
    value: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="less" scoped>
.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width-button, auto);
  height: var(--height-button, 44px);
  color: var(--color-text-default);
  border-radius: var(--border-radius);
  background-color: var(--bg-color-button, var(--color-bg-button));
  padding-top: 12px;
  padding-bottom: 12px;
  padding-inline: var(--padding-inline-button, 10px);
  cursor: pointer;

  &:hover {
    background-color: var(--bg-color-hover, var(--color-bg-button-hover));
  }
}
</style>
