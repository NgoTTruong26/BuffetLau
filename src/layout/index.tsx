import Footer from "./Footer";
import Header from "./Header/header";
import styles from "./app.module.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={styles.app}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
