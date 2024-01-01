import Api from '@/api';

export default {
  async getApis({ commit }) {
    commit('setStatus', true);

    const result = await Api.getInstance().getApis();

    if (result.name === 'Error') {
      console.log(result);
    } else {
      commit('setData', result);
      commit('setPositionsChunk', result.entries);
    }

    commit('setStatus', false);
  }
};
