<template>
  <div class="positions-and-filters">
    <Filters :items="entries" />
    
    <Positions 
      :positions="visiblePositions"
      @appear="addNextChunk"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Filters from './Filters.vue';
import Positions from './Positions.vue';

export default {
  name: 'PositionsAndFilters',
  components: {
    Filters,
    Positions,
  },
  computed: {
    ...mapState(['entries', 'visiblePositions']),
  },
  methods: {
    ...mapMutations(['addNextChunk']),
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