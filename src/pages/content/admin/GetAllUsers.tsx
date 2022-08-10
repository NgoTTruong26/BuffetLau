import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { useMutateRegister } from "hooks/useMutateGetAllUsers";
import { useQueryGetAllUsers } from "hooks/useQueryGetAllUsers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux-toolkit/app/hooks";
import { User } from "types/User";

interface Data {
  count: number;
  users: User[];
}

export default function AllUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(
    (state) => state.persistedReducer.account.login.data
  );

  const queryClient = useQueryClient();

  const query: UseQueryResult<Data> = useQueryGetAllUsers({
    user,
    dispatch,
    navigate,
  });
  const { data, isFetching } = query;

  const mutation = useMutateRegister(queryClient);

  const { status } = mutation;

  console.log(status);

  return data ? (
    <div style={{ minHeight: "100vh", marginTop: "100px" }}>
      <div>{data.count}</div>
      {data.users.map((user, index) => (
        <div key={index}>
          <div>
            <div>{user.id}</div>
            <div>{user.fullName}</div>
          </div>
          <div>
            <button>Delete</button>
            <button>Repair</button>
          </div>
        </div>
      ))}
      <button
        onClick={() =>
          mutation.mutate({
            fullName: "test",
            username: "test",
            password: "test",
          })
        }
      ></button>
    </div>
  ) : (
    <div></div>
  );
}
