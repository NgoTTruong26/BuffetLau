import { API, BASE_URL } from "./axios";

export const bookingsAPI = async (data: any) => {
  await API.post(`${BASE_URL}/bookings/create-booking`, {
    data,
  }).then((response) => console.log(response.data));
};
