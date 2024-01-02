<template>
  <h1 class="app-title">
    Free Api List
  </h1>

  <VLoader v-if="isLoading" />
  <PositionsAndFilters v-else />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VLoader from './components/common/VLoader.vue';
import PositionsAndFilters from './components/PositionsAndFilters.vue';

export default {
  name: 'App',
  components: {
    VLoader,
    PositionsAndFilters,
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['getData']),
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.app-title {
  text-align: center;
}
</style>
