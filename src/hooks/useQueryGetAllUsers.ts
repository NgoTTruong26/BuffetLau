import { Dispatch } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { API, BASE_URL } from "api/axios";
import { axiosInterceptors } from "api/axiosInterceptors";
import { NavigateFunction } from "react-router-dom";
import { User } from "types/User";

interface Arguments {
  user: User | null;
  dispatch: Dispatch;
  navigate: NavigateFunction;
}

const testGetData = async ({ user, dispatch, navigate }: Arguments) => {
  try {
    const API = axiosInterceptors({ user, dispatch, navigate });
    const res = await API.get(BASE_URL + "/all-users", {
      headers: {
        token: user?.token ? `Bearer ${user?.token}` : "",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const useQueryGetAllUsers = ({
  user,
  dispatch,
  navigate,
}: Arguments) => {
  return useQuery(
    ["allUsers"],
    () => testGetData({ user, dispatch, navigate }),
    {
      staleTime: 5000,
    }
  );
};
