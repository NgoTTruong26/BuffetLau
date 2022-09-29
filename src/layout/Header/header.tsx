import Img from "./Image/img";
import Wrapp from "./Wrapp/wrapp";
import styles from "./header.module.scss";
import Mobile from "./Mobile";
import Account from "layout/Header/User/Account";
import { RootState } from "redux-toolkit/app/store";
import LoginUser from "./User/Account/LoginUser";
import { useAppSelector } from "redux-toolkit/app/hooks";
import clsx from "clsx";
export const menu = [
  {
    title: "TRANG CHỦ",
    href: "/",
  },
  {
    title: "ƯU ĐÃI",
    href: "/uu-dai",
  },
  {
    title: "THỰC ĐƠN",
    href: "/thuc-don",
  },
  {
    title: "ĐẶT BÀN",
    href: "/dat-ban",
  },
  {
    title: "TUYỂN DỤNG",
    href: "/tuyen-dung",
  },
  {
    title: "LIÊN HỆ",
    href: "/lien-he",
  },
];

export default function Header() {
  const user = useAppSelector((state: RootState) => {
    return state.persistedReducer.account.login.data;
  });

  return (
    <header className="bg-transparent py-[30px] fixed z-10 w-full">
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Img />
          <Wrapp />
          <div className={styles.name}>Buffet Lẩu T12</div>
          {user ? <LoginUser user={user} /> : <Account />}
          <Mobile />
        </div>
      </div>
    </header>
  );
}
