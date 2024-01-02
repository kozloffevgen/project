<template>
  <div class="positions-and-filters">
    <Filters :items="entries" />
    
    <div class="positions-and-filters__count-wrap">
      <span>Positions count: {{ visiblePositionsCount }}</span>
      <span>Render position count: {{ renderPositionsCount }} </span>
    </div>

    <Positions :positions="visiblePositions" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Filters from './Filters.vue';
import Positions from './Positions.vue';

export default {
  name: 'PositionsAndFilters',
  components: {
    Filters,
    Positions,
  },
  computed: {
    ...mapState([
      'visiblePositionsCount',
      'renderPositionsCount',
      'entries',
      'visiblePositions',
    ]),
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