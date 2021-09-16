import api from "./api";

export default class Password {
  getResetLink(email) {
    return api.post("/resetPassword/token", { email });
  };

  updatePassword(newPassword, token) {
    return api.post(`/resetPassword/${token}`, { newPassword, token });
  }
}
