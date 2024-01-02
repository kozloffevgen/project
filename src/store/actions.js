import Api from '@/api';

export default {
  async getData({ commit }) {
    commit('setStatus', true);

    const result = await Api.getInstance().getData();

    if (result.name === 'Error') {
      console.log(result);
    } else {
      commit('setData', result);
    }

    commit('setStatus', false);
  },
};
