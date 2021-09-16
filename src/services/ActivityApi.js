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

  async getActivitiesByDate(body) {
    return await api.post("/activities", body, {
      headers: { ...this.getAuthorizationHeader() },
    });
  }

  async activitySubscription(body) {
    return await api.post("/activities/seat", body, {
      headers: { ...this.getAuthorizationHeader() },
    });
  }
}
