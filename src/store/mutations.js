import chunk from 'lodash-es/chunk'

const MAX_POSITIONS_CHUNK = 24;

export default {
  setStatus(state, playload) {
    state.isLoading = playload;
  },
  setData(state, playload) {
    state.data = playload;
  },
  setPositionsChunk(state, playload) {
    state.positionsChunk = chunk(playload, MAX_POSITIONS_CHUNK);
  }
};
