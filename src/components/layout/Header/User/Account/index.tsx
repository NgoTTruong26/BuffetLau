import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./account.module.scss";

export default function Account() {
  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <i className={clsx("fa-solid fa-circle-user", styles.user)}></i>
        <div className={styles.popover}>
          <Link to="/account/login">Đăng Nhập</Link>
          <Link to="/account/register">Đăng kí</Link>
          <Link to="/account/reset-password">Lấy lại mật khẩu</Link>
        </div>
      </div>
    </div>
  );
}
