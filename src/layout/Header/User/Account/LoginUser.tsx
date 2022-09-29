import clsx from "clsx";
import { useLogout } from "hooks/useLogout";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { User } from "types/User";
import styles from "./account.module.scss";

export interface Children {
  user: User;
}

export default function LoginUser({ user }: Children) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = useLogout;

  return (
    <div className={styles.account}>
      <div className={styles.container}>
        <i className={clsx("fa-solid fa-circle-user", styles.user)}></i>
        <div className={styles.popover}>
          <p>{`${user.lastName} ${user.firstName}`}</p>
          <Link to="/account/register">Đăng kí</Link>
          <Link to="/account/reset-password">Lấy lại mật khẩu</Link>
          {user.position.position === "admin" && (
            <Link to="admin/get-all-users">Xem thành viên</Link>
          )}
          <p onClick={() => logout({ dispatch, navigate, user })}>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
}
