import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ModalityApi extends AuthenticatedApi {
  static getModalities() {
    const modalities = api.get("/modalities", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
    return modalities;
  }
}
