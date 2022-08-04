import { BASE_URL } from "api/axios";
import { axiosInterceptors } from "api/axiosInterceptors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux-toolkit/app/hooks";

interface Data {
  count: number;
  users: any[];
}

export default function AllUsers() {
  const [data, setData] = useState<Data>({} as Data);

  const navigate = useNavigate();

  const user = useAppSelector(
    (state) => state.persistedReducer.account.login.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const API = axiosInterceptors({ user, dispatch, navigate });

    API.get(BASE_URL + "/all-users", {
      headers: {
        token: user?.token ? `Bearer ${user?.token}` : "",
      },
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [user?.id]);

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
