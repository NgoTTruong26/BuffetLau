import Img from "./Image/img";
import Wrapp from "./Wrapp/wrapp";
import styles from "./header.module.scss";
import Mobile from "./Mobile";
import Account from "components/layout/Header/User/Account";

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
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Img />
          <Wrapp />
          <div className={styles.name}>Buffet Lẩu T12</div>
          <Account />
          <Mobile />
        </div>
      </div>
    </header>
  );
}
