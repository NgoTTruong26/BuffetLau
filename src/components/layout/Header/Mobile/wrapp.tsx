import styles from './mobile.module.scss';
import {menu} from '../header'

export default function Wrapp() {

  
  return (
    <div>
      <div className={styles.nameMobile}>Buffet Lẩu T12</div>
      <div className={styles.mainMobile}>
          {menu.map((item, index) => (
              <div key={index}>
                  <a>{item.title}</a>
              </div>
          ))}
      <span className={styles.hotline}>
      <a href="tel:0968417936">Hotline: 096 841 79 36</a>
      </span>
      </div>
    </div>
  )
}
