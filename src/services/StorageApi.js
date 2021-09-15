import api from "./api";
import axios from "axios";

export default class StorageApi {
  async uploadUserPicture(file, url) {
    const imageUrl = url.split("?")[0];
    const instance = axios.create();
    instance.put(url, file, { headers: { "Content-Type": "multipart/form-data" } } );
    return imageUrl;   
  }

  async sendImageToDatabase(body) {
    return await api.post("/user/picture", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
