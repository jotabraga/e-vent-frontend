import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class Lodge extends AuthenticatedApi {
  static getLodgeOptions() {
    const lodgeOptions = api.get("/lodges", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
    return lodgeOptions;
  }
}
