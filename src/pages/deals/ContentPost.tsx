import { memo } from "react";
import styles from "./deals.module.scss";

interface Children {
  data: [];
}

interface DATA {
  title: string;
  body: string;
  image: string;
}
function ContentPost({ data }: Children) {
  return (
    <div className={styles.collection}>
      {data &&
        data.map((item: DATA, index: number) => (
          <div key={index} className={styles.item}>
            <div className={styles.content}>
              <div
                className={styles["img-block"]}
                style={{ backgroundImage: `url('${item["image"]}')` }}
              >
                <img className={styles["img-hidden"]} src={item.image} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default memo(ContentPost);
