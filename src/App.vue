<template>
  <h1 class="app-title">
    Free Api List
  </h1>

  <VLoader v-if="$store.state.isLoading" />
  <PositionsAndFilters v-else />
</template>

<script>
import VLoader from './components/common/VLoader.vue';
import PositionsAndFilters from './components/PositionsAndFilters.vue';

export default {
  name: 'App',
  components: {
    VLoader,
    PositionsAndFilters,
  },
  created() {
    this.$store.dispatch('getData');
  },
};
</script>

<style lang="less" scoped>
.app-title {
  text-align: center;
}
</style>
