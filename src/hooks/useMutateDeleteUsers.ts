import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosJWTInterceptors } from "api/axiosInterceptors";
import { Action } from "types/Action";
import { User } from "types/User";

export const useMutateDeleteUser = ({
  user,
  dispatch,
  navigate,
}: Action<User>) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (usersChecked: string[]) => {
      const API = axiosJWTInterceptors({
        user,
        dispatch,
        navigate,
      });
      return API.delete(`delete-account`, {
        data: usersChecked,
      });
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["allUsers"], () => ({
          count: data.data.data.count,
          users: data.data.data.rows,
        }));
      },
    }
  );
};
