import api from "./api";

export default class Lodge {
  static getLodgeOptions() {
    const lodgeOptions = api.get("/lodges");
    return lodgeOptions;
  }
}
