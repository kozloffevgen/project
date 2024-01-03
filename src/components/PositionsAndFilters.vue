<template>
  <div class="positions-and-filters">
    <Filters :items="$store.state.entries" />
    
    <div class="positions-and-filters__count-wrap">
      <span>Positions count: {{ $store.state.visiblePositionsCount }}</span>
      <span>Render position count: {{ $store.state.renderPositionsCount }} </span>
    </div>

    <Positions />
  </div>
</template>

<script>
import Filters from './Filters.vue';
import Positions from './Positions.vue';

export default {
  name: 'PositionsAndFilters',
  components: {
    Filters,
    Positions,
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