import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./account.module.scss";

interface Children {
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
  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <i className={clsx("fa-solid fa-circle-user", styles.user)}></i>
        <div className={styles.popover}>
          <a>{data.fullName}</a>
          <Link to="/account/register">Đăng kí</Link>
          <Link to="/account/reset-password">Lấy lại mật khẩu</Link>
        </div>
      </div>
    </div>
  );
}
