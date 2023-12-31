<template>
  <div class="v-intersection-observer">
    <VLoader />
  </div>
</template>

<script>
import VLoader from './VLoader.vue';

export default {
  name: 'VIntersectionObserver',
  components: {
    VLoader,
  },
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
    this.observer = new IntersectionObserver(this.onIntersect, {
      rootMargin: '-200px',
      ...this.options,
    });

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer?.disconnect();
  },
};
</script>

<style lang="less" scoped>
.v-intersection-observer {
  position: relative;
  height: 40px;

  /deep/ .v-loader {
    width: 20px;
    height: 20px;
  }
}
</style>