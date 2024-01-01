<template>
  <div class="positions-and-filters">
    <Filters :items="data.entries" @change="filterItems" />
    <Positions 
      :positions="visiblePositins"
      :isShow="isShow"
      @appear="addChunks"
    />
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
  data() {
    return {
      itemsChunk: [],
      visiblePositins: [],
      nextChunkIndex: 0,
    };
  },
  computed: {
    ...mapState(['data', 'positionsChunk']),
    isShow() {
      return this.nextChunkIndex < this.positionsChunk.length;
    },
  },
  methods: {
    addChunks() {
      this.visiblePositins.push(...this.positionsChunk[this.nextChunkIndex]);
      this.nextChunkIndex += 1;
    },
  },
  created() {    
    [this.visiblePositins] = this.positionsChunk;
    this.nextChunkIndex += 1;
  }
};
</script>

<style lang="less" scoped>
.positions-and-filters {
  position: relative;
  max-width: 1100px;
  margin: 20px auto;
}
</style>