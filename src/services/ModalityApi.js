import api from "./api";

export default class ModalityApi {
  static getModalities() {
    const modalities = api.get("/modalities");
    return modalities;
  }
}
