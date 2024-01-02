<template>
  <div class="positions-and-filters">
    <Filters :items="entries" />
    
    <span class="positions-count">
      Positions count: {{ visiblePositionsCount }}
    </span>
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
    ...mapState(['visiblePositionsCount', 'entries', 'visiblePositions']),
  },
};
</script>

<style lang="less" scoped>
.positions-and-filters {
  position: relative;
  max-width: 1100px;
  margin: 20px auto;
}
</style>