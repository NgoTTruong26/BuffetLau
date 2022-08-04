import { axiosJWT } from "./axios";

class RequestAPI {
  async reFresh() {
    try {
      const response = await axiosJWT.post("/refresh", {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RequestAPI();
