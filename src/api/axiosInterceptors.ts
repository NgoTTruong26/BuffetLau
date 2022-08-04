import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { NavigateFunction } from "react-router-dom";
import { login, logout } from "redux-toolkit/features/account/accountSlice";
import { Action } from "types/Action";
import { User } from "types/User";
import RequestAPI from "./RequestAPI";

export const axiosInterceptors = ({
  user,
  dispatch,
  navigate,
}: Action<User>) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decode: any = jwtDecode(user?.token!);
      if (decode.exp < date.getTime() / 1000) {
        const data = await RequestAPI.reFresh();

        if (!data) {
          alert("Lỗi hệ thống vui lòng đăng nhập lại!");
          dispatch(logout());
          navigate("/account/login");
          return;
        }

        dispatch(login({ ...data, token: data.accessToken }));
        config.headers!["token"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};

export const axiosJWTInterceptors = ({
  user,
  dispatch,
  navigate,
}: Action<User>) => {
  const newInstance = axios.create({
    withCredentials: true,
  });

  newInstance.interceptors.request.use(
    async (config) => {
      const date = new Date();
      const decode: any = jwtDecode(user?.token!);

      if (decode?.exp < date.getTime() / 1000) {
        const data = await RequestAPI.reFresh();

        if (!data) {
          alert("Lỗi hệ thống vui lòng đăng nhập lại!");
          dispatch(logout());
          navigate("/account/login");
          return;
        }

        dispatch(login({ ...user, token: data.accessToken }));
        config.headers!["token"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
