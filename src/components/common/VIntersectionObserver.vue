<template>
  <div class="v-intersection-observer" />
</template>

<script>

export default {
  name: 'VIntersectionObserver',
  props: {
    itemsSelector: { type: String , default: ''},
    options: { type: Object, default: null }
  },
  emits: ['appear'],
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersect, this.options);

    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer?.disconnect();
  },
  methods: {
    onIntersect(entries) {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          this.$emit('appear');
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.v-intersection-observer {
  position: relative;
  height: 40px;
}
</style>