import clsx from "clsx";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "redux-toolkit/features/account/accountSlice";
import styles from "./account.module.scss";

export interface Children {
  data: {
    id: string;
    dateOfBirth: string;
    email: string;
    gender: boolean;
    phoneNumber: string;
    address: string;
    fullName: string;
    avatar: string;
    admin: boolean;
    username: string;
  };
}

export default function LoginUser({ data }: Children) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <i className={clsx("fa-solid fa-circle-user", styles.user)}></i>
        <div className={styles.popover}>
          <p>{data.fullName}</p>
          <Link to="/account/register">Đăng kí</Link>
          <Link to="/account/reset-password">Lấy lại mật khẩu</Link>
          <p
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Đăng xuất
          </p>
        </div>
      </div>
    </div>
  );
}
