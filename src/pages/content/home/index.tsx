import Banner from "./Banner/banner";
import MainHome from "./SetBuffet/setBuffet";
import styles from "./bodyHome.module.scss";

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Banner />
      <MainHome />
    </div>
  );
}
