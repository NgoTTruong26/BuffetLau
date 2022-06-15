import styles from "./book.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import yup from "../../yup/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "yup/Field";

type Inputs = {
  numberAdults: number;
  numberChildren: number;
  day: string;
  hours: string;
  author: string;
  phone: string;
  email: string;
};

const schema = yup.object().shape({
  numberAdults: yup
    .string()
    .required("Số người đi không được để trống!!")
    .numberAdults(),
  numberChildren: yup.string().numberChildren(),
  day: yup.string().required("Ngày đặt bàn không được để trống!!").day(),
  hours: yup.string().required("Giờ đặt bàn không được để trống!!").hours(),
  author: yup.string().required("Họ và Tên người đặt không được để trống!!"),
  phone: yup.string().required("Số điện thoại không được để trống!!"),
  email: yup.string().required("Email không được để trống!!"),
});

export default function Book() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.content}>
          <div className={styles.main}>
            <div className={styles.title}>Đặt Bàn</div>
            <div className={styles.order}>
              <div className={styles.column}></div>
              <div className={styles["column-2"]}>
                <div className={styles["row-1"]}>
                  <div className={styles.adults}>
                    <Field
                      innerText="Số người"
                      className={styles.input}
                      type="text"
                      id="numberAdults"
                      error={errors.numberAdults?.message}
                      {...register("numberAdults")}
                    />
                  </div>
                  <div className={styles.children}>
                    <Field
                      innerText="Số trẻ em"
                      className={styles.input}
                      type="text"
                      id="numberChildren"
                      error={errors.numberChildren?.message}
                      {...register("numberChildren")}
                    />
                  </div>
                </div>
                <div className={styles["row-2"]}>
                  <div className={styles.day}>
                    <Field
                      innerText="Ngày"
                      className={styles.input}
                      type="date"
                      id="day"
                      error={errors.day?.message}
                      {...register("day")}
                    />
                  </div>
                  <div className={styles.hours}>
                    <Field
                      innerText="Giờ"
                      className={styles.input}
                      type="time"
                      id="hours"
                      error={errors.hours?.message}
                      {...register("hours")}
                    />
                  </div>
                </div>
                <div className={styles["row-3"]}>
                  <div className={styles.note}>
                    <Field
                      innerText="Ghi chú"
                      className={styles.input}
                      type="text"
                      id="note"
                    />
                  </div>
                  <div className={styles.email}>
                    <Field
                      innerText="Email"
                      className={styles.input}
                      type="text"
                      id="email"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.author}>
                  <Field
                    innerText="Họ và Tên người đặt"
                    className={styles.input}
                    type="text"
                    id="author"
                    error={errors.author?.message}
                    {...register("author")}
                  />
                </div>
                <div className={styles.phoneNumber}>
                  <Field
                    innerText="Số điện thoại"
                    className={styles.input}
                    type="text"
                    id="phone"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>
                <div className={styles.button}>
                  <button type="submit">Đặt bàn</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
