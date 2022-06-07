import styles from "./book.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Book() {
  console.log(useForm);

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.title}>Đặt Bàn</div>
            <div className={styles.order}>
              <div className={styles.column}></div>
              <div className={styles.column}>
                <div>
                  <label htmlFor="numberPeople">Số người</label>
                  <input
                    className={styles.input}
                    type="text"
                    id="numberPeople"
                  />
                </div>
                <div className={styles.schedule}>
                  <div className={styles.day}>
                    <label htmlFor="day">Ngày</label>
                    <input className={styles.input} type="date" id="day" />
                  </div>
                  <div className={styles.hours}>
                    <label htmlFor="hours">Giờ</label>
                    <input className={styles.input} type="time" id="hours" />
                  </div>
                </div>
                <div className={styles.note}>
                  <label htmlFor="note">Ghi chú</label>
                  <input className={styles.input} type="text" id="note" />
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.author}>
                  <label htmlFor="author">Tên người đặt</label>
                  <input className={styles.input} type="text" id="author" />
                </div>
                <div className={styles.phoneNumber}>
                  <label htmlFor="phone">Số điện thoại</label>
                  <input className={styles.input} type="text" id="phone" />
                </div>
                <div className={styles.button}>
                  <button
                    type="submit"
                    onClick={() => {
                      console.log(123);
                    }}
                  >
                    Đặt bàn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
