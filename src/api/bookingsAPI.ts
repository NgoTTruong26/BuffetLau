import { API, BASE_URL } from "./axios";

export const bookingsAPI = async (data: any) => {
  try {
    await API.post(`${BASE_URL}/actions/create-booking`, {
      ...data,
    }).then((response) => console.log(response.data));
  } catch (error) {
    console.log(error);
  }
};
