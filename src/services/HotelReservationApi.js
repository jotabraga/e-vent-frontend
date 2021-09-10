import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelReservationApi extends AuthenticatedApi {
  async getHotelReservation(id) {
    return await api.get(`/reservation/${id}`);
  }
}
