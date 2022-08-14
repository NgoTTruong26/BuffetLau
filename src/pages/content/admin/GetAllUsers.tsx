import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import { useMutateRegister } from "hooks/useMutateGetAllUsers";
import { useQueryGetAllUsers } from "hooks/useQueryGetAllUsers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux-toolkit/app/hooks";
import { User } from "types/User";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { FaMinusSquare } from "@react-icons/all-files/fa/FaMinusSquare";
import { ImBin2 } from "@react-icons/all-files/im/ImBin2";
import { GoPlus } from "@react-icons/all-files/go/GoPlus";

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

  return data?.users ? (
    <div className="mt-[100px] min-h-screen">
      <div className="max-w-[1250px] mx-auto">
        <div className="grid grid-cols-12 gap-x-[30px]">
          <div className="flex items-center justify-center col-span-2">
            <ImBin2 className="align-middle" />
            <span className="pl-[10px]">Xóa người dùng</span>
          </div>
          <div className="flex items-center justify-center col-span-2">
            <GoPlus className="align-middle" />
            <span className="pl-[10px]">Thêm người dùng</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-[10px]">
          <div className="flex items-center justify-center ">
            <FaMinusSquare className="align-middle" />
          </div>
          <div className="col-span-2">NGƯỜI DÙNG</div>
          <div className="col-span-2 col-start-5">TÀI KHOẢN</div>
          <div className="col-span-2 flex justify-center">CHỨC VỤ</div>
          <div className="text-right">TẠO VÀO</div>
          <div className="text-right">CẬP NHẬT</div>
          <div className="text-right">ĐIỆN THOẠI</div>
        </div>
        {data.users.map((user, index) => {
          console.log(user);

          const createdAt = new Date(user.createdAt!);
          const updatedAt = new Date(user.updatedAt!);
          return (
            <div key={index} className="grid grid-cols-12 gap-x-[10px]">
              <div className="flex items-center justify-center ">
                <input className="align-middle" type="checkbox" />
              </div>
              <div></div>
              <div className="col-span-2">{user.fullName}</div>
              <div className="col-span-2">{user.username}</div>
              <div className="col-span-2 flex justify-center">
                {user.position}
              </div>
              <div className="text-right">
                {createdAt.getDate()}/{createdAt.getMonth() + 1}/
                {createdAt.getFullYear()}
              </div>
              <div className="text-right">
                {updatedAt.getDate()}/{updatedAt.getMonth() + 1}/
                {updatedAt.getFullYear()}
              </div>
              <div className="text-right">
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
