<template>
  <div class="v-intersection-observer">
  </div>
</template>

<script>

export default {
  name: 'VIntersectionObserver',
  props: {
    itemsSelector: { type: String },
    options: { type: Object, default: null }
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
  mounted() {
    this.observer = new IntersectionObserver(this.onIntersect, this.options);

    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer?.disconnect();
  },
};
</script>

<style lang="less" scoped>
.v-intersection-observer {
  position: relative;
  height: 40px;
}
</style>