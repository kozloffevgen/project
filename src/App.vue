<template>
  <h1 class="app-title">
    Free Api List
  </h1>

  <VLoader v-if="isLoading" />
  <PositionsAndFilter v-else />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VLoader from './components/common/VLoader.vue';
import PositionsAndFilter from './components/PositionsAndFilters.vue';

export default {
  name: 'App',
  components: {
    VLoader,
    PositionsAndFilter,
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['getApis'])
  },
  created() {
    this.getApis();
  }
}
</script>

<style lang="less" scoped>
.app-title {
  text-align: center;
}
</style>