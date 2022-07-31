import mainLogo from "./laut12.png";
import styles from "./img.module.scss";

export default function Img() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={mainLogo} height="79px" />
    </div>
  );
}
