import styles from "./banner.module.scss";
import src from "./Image/277777984_5208881112510715_6186933002053502532_n-min.jpg";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <img src={src} className={styles.banner}></img>
    </div>
  );
}
