export default {
  isShowObserver(state) {
    return state.nextChunkIndex < state.positionsChunk.length;
  }
};
