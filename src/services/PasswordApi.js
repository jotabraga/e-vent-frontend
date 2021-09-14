import api from "./api";

export default class Password {
  getResetLink(email) {
    return api.post("/resetPassword", { email });
  };

  updatePassword(newPassword, token) {
    return api.post("/resetPassword/", { newPassword, token });
  }
}
