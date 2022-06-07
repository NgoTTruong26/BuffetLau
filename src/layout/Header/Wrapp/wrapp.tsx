import { useEffect, useState } from "react";
import styles from "./wrapp.module.scss";
import { menu } from "../header";
import { Link, useParams } from "react-router-dom";
import clsx from "clsx";

export default function Wrapp() {
  const [pathName, setPathName] = useState<string>(document.location.pathname);

  console.log(pathName);

  return (
    <ul className={styles.wrapp}>
      {menu.map((item, index) => (
        <li key={index}>
          <Link
            className={clsx(styles.hoverable, {
              [styles.active]: pathName === item.href,
            })}
            onClick={() => {
              setPathName(item.href);
            }}
            to={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
