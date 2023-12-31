import chunk from 'lodash-es/chunk';

const MAX_POSITIONS_CHUNK = 24;

export default {
  setStatus(state, playload) {
    state.isLoading = playload;
  },
  setData(state, { count, entries }) {
    state.count = count;
    state.entries = entries;

    this.commit('setEntriesId');
    this.commit('setVisiblePositions');
  },
  setEntriesId(state) {
    let id = 0;
    state.entries.forEach((item) => {
      item.id = id;
      id += 1;
    });
  },
  setVisiblePositions(state) {
    state.visiblePositionsCount = state.count;
    state.renderPositionsCount = MAX_POSITIONS_CHUNK;
    state.positionsChunk = chunk(state.entries, MAX_POSITIONS_CHUNK);
    [state.visiblePositions] = state.positionsChunk;
  },
  addNextChunk(state) {
    state.visiblePositions.push(...state.positionsChunk[state.nextChunkIndex]);
    state.renderPositionsCount = state.visiblePositions.length;
    state.nextChunkIndex += 1;
  },
  setFilters(state, { key, value }) {
    const findedFilter = state.filters.find((filter) => filter[key]);

    if (findedFilter) {
      findedFilter[key] = value;

      return;
    }

    state.filters.push({ [key]: value });
  },
  setFilteredItems(state) {
    if (!state.filters.length) return;

    const filtersCount = state.filters.length;
    const filteredPositions = state.entries.reduce((acc, item) => {
      let count = 1;

      state.filters.forEach((filter) => {
        const [[filterKey, filterValue]] = Object.entries(filter);

        if (String(item[filterKey]) === filterValue && count === filtersCount) {
          acc.push(item);
        }

        if (String(item[filterKey]) === filterValue) {
          count += 1;
        }
      });

      return acc;
    }, []);

    state.visiblePositionsCount = filteredPositions.length;
    state.nextChunkIndex = 1;
    state.positionsChunk = chunk(filteredPositions, MAX_POSITIONS_CHUNK);
    [state.visiblePositions] = state.positionsChunk;
    state.renderPositionsCount = state.visiblePositions ? state.visiblePositions.length : 0;
  },
  resetFilters(state, item) {
    if (!state.filters.length) return;

    state.nextChunkIndex = 1;

    if (item) {
      let filterItemIndex = state.filters.findIndex((filter) => filter[item.key]);
      state.filters.splice(filterItemIndex, 1);

      this.commit('setFilteredItems');

      if (state.filters.length) return;
    }

    this.commit('setVisiblePositions');
    state.filters = [];
  },
};
