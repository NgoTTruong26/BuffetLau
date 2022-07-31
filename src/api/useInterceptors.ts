import axios from "axios";
import jwtDecode from "jwt-decode";
import { login } from "redux-toolkit/features/account/accountSlice";
import RequestAPI from "./RequestAPI";

export const useInterceptors = (user: any, dispatch: any) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decode: any = jwtDecode(user?.token);
      if (decode.exp < date.getTime() / 1000) {
        const data = await RequestAPI.reFresh();

        dispatch(login({ ...user, token: data.accessToken }));
        config.headers!["token"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
