<template>
  <div class="positions-and-filters">
    <Filters :items="data.entries" @change="filterItems" />
    <Positions :positions="visiblePositins" />

    <VIntersectionObserver v-if="isShow" @appear="addChunks" />   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import chunk from 'lodash-es/chunk'
import VIntersectionObserver from './common/VIntersectionObserver.vue';
import Filters from './Filters.vue';
import Positions from './Positions.vue';

const MAX_POSITIONS_CHUNK = 24;

export default {
  name: 'PositionsAndFilters',
  components: {
    Filters,
    Positions,
    VIntersectionObserver,
  },
  data() {
    return {
      itemsChunk: [],
      visiblePositins: [],
      nextChunkIndex: 0,
    };
  },
  computed: {
    ...mapState(['data']),
    isShow() {
      return this.nextChunkIndex < this.itemsChunk.length;
    },
  },
  methods: {
    addChunks() {
      this.visiblePositins.push(...this.itemsChunk[this.nextChunkIndex]);
      this.nextChunkIndex += 1;
    },
  },
  created() {    
    this.itemsChunk = chunk(this.data.entries, MAX_POSITIONS_CHUNK);
    [this.visiblePositins] = this.itemsChunk;
    this.nextChunkIndex += 1;
  }
};
</script>

<style lang="less" scoped>
.positions-and-filters {
  position: relative;
  max-width: 1100px;
  max-height: 700px;
  overflow-y: auto;
  margin: 20px auto;
}
</style>