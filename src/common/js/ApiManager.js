const defaultParams =  {
  basePath: 'https://api.publicapis.org/entries',
};

export default class ApiManager {
    constructor(params) {
      this.params = {
        ...defaultParams,
        ...params,
      }
    }

    async fetchHandler({ path, options = {} }) {
      try {
        const responce = await fetch(`${this.params.basePath}${path}`, {
          ...options,
        });
        const result = await responce;

        return await result.json()
      } catch (error) {
        return new Error(error);
      }
    }

    async get(path = '') {
      return this.fetchHandler({ path })
    }
}