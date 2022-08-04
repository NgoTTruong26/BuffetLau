import { API, BASE_URL } from "api/axios";
import { axiosJWTInterceptors } from "api/axiosInterceptors";
import {
  logout,
  LogoutLoading,
} from "redux-toolkit/features/account/accountSlice";
import { Action } from "types/Action";

import { User } from "types/User";

export const useLogout = async ({ dispatch, navigate, user }: Action<User>) => {
  try {
    dispatch(LogoutLoading());
    const axiosJWT = axiosJWTInterceptors({ user, dispatch, navigate });
    const response = await axiosJWT.post(BASE_URL + "/logout", user?.id, {
      headers: {
        token: `Bearer ${user?.token}`,
      },
    });
    dispatch(logout());
    navigate("/");
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
