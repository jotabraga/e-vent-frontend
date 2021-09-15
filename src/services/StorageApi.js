import axios from "axios";

export default class StorageApi {
  static async saveUserPicture(file, url) {
    const imageUrl = url.split("?")[0];
    const instance = axios.create();
    console.log(imageUrl, "imageUrl");
    console.log(url, "url");
    instance.put(url, file, { headers: { "Content-Type": "multipart/form-data" } } );
    return imageUrl;   
  }
}
