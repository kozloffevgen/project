import ApiManager from "@/common/js/ApiManager";

export default class Api {  
  constructor() {
    if (!this.manager) {
      this.manager = new ApiManager()
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }

  getData() {
    return this.manager.get();
  }
}