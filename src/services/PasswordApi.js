import api from "./api";

export default class Password {
  reset(email) {
    return api.post("/reset-password", { email });
  }
}
