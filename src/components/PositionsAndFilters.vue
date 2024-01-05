<template>
  <div class="positions-and-filters">
    <positions-filters :items="$store.state.entries" />
    
    <div class="positions-and-filters__count-wrap">
      <span>Positions count: {{ $store.state.visiblePositionsCount }}</span>
      <span>Rendered position count: {{ $store.state.renderPositionsCount }} </span>
    </div>

    <positions-items />
  </div>
</template>

<script>
import PositionsFilters from './PositionsFilters.vue';
import PositionsItems from './PositionsItems.vue';

export default {
  name: 'PositionsAndFilters',
  components: {
    PositionsFilters,
    PositionsItems,
  },
};
</script>

<style lang="less" scoped>
.positions-and-filters {
  position: relative;
  max-width: 1100px;
  margin: 20px auto;

  &__count-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>