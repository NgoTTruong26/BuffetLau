import { useInterceptors } from "api/useInterceptors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux-toolkit/app/hooks";

interface Data {
  count: number;
  users: any[];
}

export default function AllUsers() {
  const [data, setData] = useState<Data>({} as Data);

  const user = useAppSelector((state) => state.account.login.data);
  const dispatch = useDispatch();

  const axiosJWT = useInterceptors(user, dispatch);
  console.log(123);

  useEffect(() => {
    axiosJWT
      .get("http://localhost:3002/all-users", {
        headers: {
          token: user?.token ? `Bearer ${user?.token}` : "",
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return data.users ? (
    <div>
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
    </div>
  ) : (
    <div></div>
  );
}
