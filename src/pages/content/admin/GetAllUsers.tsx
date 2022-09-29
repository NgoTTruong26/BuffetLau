import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { useMutateRegister } from "hooks/useMutateGetAllUsers";
import { useQueryGetAllUsers } from "hooks/useQueryGetAllUsers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux-toolkit/app/hooks";
import { User } from "types/User";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { ImBin2 } from "@react-icons/all-files/im/ImBin2";
import { GoPlus } from "@react-icons/all-files/go/GoPlus";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useMutateDeleteUser } from "hooks/useMutateDeleteUsers";

interface Data {
  count: number;
  users: User[];
}

export default function AllUsers() {
  let [usersChecked, setUsersChecked] = useState<string[]>([]);

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

  const handleCheckAllUsers = () => {
    if (data?.users.every((user) => usersChecked.includes(user.id))) {
      return setUsersChecked([]);
    }

    const checkAllUsers = data?.users.reduce((prevs: string[], curr) => {
      if (!prevs.includes(curr.id)) {
        return [...prevs, curr.id];
      }
      return prevs;
    }, []);

    return checkAllUsers && setUsersChecked(checkAllUsers);
  };

  const handleDeleteUsers = useMutateDeleteUser({ user, dispatch, navigate });

  const handleChangeCheckbox = (id: string) => {
    if (usersChecked.includes(id)) {
      return setUsersChecked((prevs) => prevs!.filter((user) => user !== id));
    }
    return setUsersChecked([...usersChecked, id]);
  };

  return data?.users ? (
    <div className="mt-[100px] min-h-screen">
      <div className="max-w-[1400px] mx-auto p-[30px] bg-[#fff] rounded-[2.5rem] shadow-3xl">
        <div className="border-b-[2px] border-b-[#c2c4cc85] pb-[20px]">
          <div className="grid grid-cols-10 gap-x-[30px] pb-[40px]">
            <div
              onClick={() => handleDeleteUsers.mutate(usersChecked)}
              className={clsx(
                "flex items-center justify-center col-span-2 border ",
                data?.users.length > 1
                  ? "border-sky-400 rounded-full text-sky-400"
                  : "border-[#c2c5c8] rounded-full text-[#c2c5c8]",
                {
                  [styles["border-sky-400"]]: data?.users.length > 1,
                }
              )}
            >
              <ImBin2 className="align-middle" />
              <span className="pl-[10px]">Xóa người dùng</span>
            </div>
            <div
              className={clsx(
                "flex items-center justify-center col-span-2 border border-sky-400 rounded-full text-sky-400",
                styles["border-sky-400"]
              )}
            >
              <GoPlus className="align-middle" />
              <span className="pl-[10px] ">Thêm người dùng</span>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-x-[10px]">
            <div className="flex items-center justify-center  ">
              <input
                className="align-middle h-[28px] w-[15px] accent-[#0d9cbb]"
                type="checkbox"
                checked={data.users.every((user) =>
                  usersChecked.includes(user.id)
                )}
                onChange={() => handleCheckAllUsers()}
              />
            </div>
            <div className="grid col-span-4 grid-cols-12">
              <div className="col-span-6">NGƯỜI DÙNG</div>
              <div className="col-start-9 col-span-7">TÀI KHOẢN</div>
            </div>
            <div className=" flex justify-center">CHỨC VỤ</div>
            <div className="text-right">TẠO VÀO</div>
            <div className="text-right">CẬP NHẬT</div>
            <div className="text-right">ĐIỆN THOẠI</div>
          </div>
        </div>
        {data.users.map((user, index) => {
          const createdAt = new Date(user.createdDate!);
          const updatedAt = new Date(user.updatedDate!);
          return (
            <div
              key={index}
              className={clsx(
                styles.user,
                " grid grid-cols-10 gap-x-[10px] min-h-[60px] border-b border-b-[#c2c4cc38] py-[15px]",
                {
                  [styles.active]: usersChecked.includes(user.id),
                }
              )}
            >
              <div className="flex items-center justify-center ">
                <input
                  className="align-middle h-[28px] w-[15px] accent-[#0d9cbb]"
                  type="checkbox"
                  checked={usersChecked.includes(user.id)}
                  onChange={() => handleChangeCheckbox(user.id)}
                />
              </div>
              <div className="grid col-span-4 grid-cols-12">
                <div className="flex col-span-6">
                  <img
                    src="https://cdn.dribbble.com/users/1152624/avatars/normal/00e92ca85dbc3439e1f17625e9cf2993.jpg?1638519314"
                    alt=""
                    className="max-h-[50px] rounded-full"
                  />
                  <div className="ml-[20px]">
                    <div>{`${user.lastName} ${user.firstName}`}</div>
                    <div>tiennhannaruto@gmail.com</div>
                  </div>
                </div>
                <div className="col-start-9 col-span-7">
                  <div className="">{user.username}</div>
                </div>
              </div>
              <div className="col-span-1 flex justify-center">
                {user.position.position}
              </div>
              <div className="justify-end">
                {createdAt.getDate()}/{createdAt.getMonth() + 1}/
                {createdAt.getFullYear()}
              </div>
              <div className="justify-end">
                {updatedAt.getDate()}/{updatedAt.getMonth() + 1}/
                {updatedAt.getFullYear()}
              </div>
              <div className="justify-end">
                {user.phoneNumber ? user.phoneNumber : "Chưa thêm"}
              </div>
              <div>
                <BsThreeDots className="mx-auto" size="35px" color="#c2c4cc" />
              </div>
            </div>
          );
        })}

        <button
          onClick={() =>
            mutation.mutate({
              fullName: "test",
              username: "test",
              password: "test",
            })
          }
        >
          Hello
        </button>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
