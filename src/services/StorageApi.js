import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class StorageApi extends AuthenticatedApi {
  async confirmBooking(body) {
    return await api.post("/bookings", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}

