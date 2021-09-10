import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivityApi extends AuthenticatedApi {
  async getAllDates() {
    return await api.get("/activities", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
