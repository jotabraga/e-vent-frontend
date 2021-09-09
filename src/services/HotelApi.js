import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelApi extends AuthenticatedApi {
  async GetHotelsInformation() {
    return await api.get("/hotels", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  async GetHotelData(id) {
    return await api.get(`/hotels/${id}`, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  async makeHotelReservartion(hotelId, roomId) {
    return await api.post(
      `/hotels/${hotelId}/rooms/${roomId}`,
      {},
      {
        headers: {
          ...this.getAuthorizationHeader(),
        },
      }
    );
  }
}
