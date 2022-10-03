import styles from "./bookings.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import yup from "components/yup/yupGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import Field from "components/yup/Field";
import { bookingsAPI } from "api/bookingsAPI";
import { useSelector } from "react-redux";
import { RootState } from "redux-toolkit/app/store";

type Inputs = {
  numberAdults: number;
  numberChildren: number;
  bookingDate: string;
  bookingHours: string;
  customer: string;
  phone: string;
  email: string;
};

const schema = yup.object().shape({
  numberAdults: yup
    .string()
    .required("Số người đi không được để trống!!")
    .numberAdults(),
  numberChildren: yup.string().numberChildren(),
  bookingDate: yup.string().day("Ngày đặt bàn không được để trống!!"),
  bookingHours: yup
    .string()
    .required("Giờ đặt bàn không được để trống!!")
    .hours(),
  customer: yup.string().required("Họ và Tên người đặt không được để trống!!"),
  phone: yup
    .string()
    .required("Số điện thoại không được để trống!!")
    .matches(/(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/, {
      message: "Số điện thoại nhập không hợp lệ!!",
    }),
  email: yup.string().required("Email không được để trống!!").email(),
});

export default function Book() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await bookingsAPI({ data });
  };

  const a = watch(["numberAdults"]);

  /*   const user = useSelector((state: RootState) =>
    console.log(state.persistedReducer.account.login.data)
  ); */

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="max-w-[1250px] w-full mt-[-60px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <div className={styles.main}>
            <div className={styles.title}>Đặt Bàn</div>
            <div className={styles.order}>
              <div className={styles["column-1"]}>
                <div className={styles["row-1"]}>
                  <div className={styles.adults}>
                    <Field
                      label={true}
                      innerText="Số người"
                      classNameInput={styles.input}
                      type="text"
                      id="numberAdults"
                      error={errors.numberAdults?.message}
                      {...register("numberAdults")}
                    />
                  </div>
                  <div className={styles.children}>
                    <Field
                      label={true}
                      innerText="Số trẻ em"
                      classNameInput={styles.input}
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
                      label={true}
                      innerText="Ngày"
                      classNameInput={styles.input}
                      type="date"
                      id="bookingDate"
                      error={errors.bookingDate?.message}
                      {...register("bookingDate")}
                    />
                  </div>
                  <div className={styles.hours}>
                    <Field
                      label={true}
                      innerText="Giờ"
                      classNameInput={styles.input}
                      type="time"
                      id="bookingHours"
                      error={errors.bookingHours?.message}
                      {...register("bookingHours")}
                    />
                  </div>
                </div>
                <div className={styles["row-3"]}>
                  <div className={styles.note}>
                    <Field
                      label={true}
                      innerText="Ghi chú"
                      classNameInput={styles.input}
                      type="text"
                      id="note"
                    />
                  </div>
                  <div className={styles.email}>
                    <Field
                      label={true}
                      innerText="Email"
                      classNameInput={styles.input}
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
                    label={true}
                    innerText="Họ và Tên người đặt"
                    classNameInput={styles.input}
                    type="text"
                    id="customer"
                    error={errors.customer?.message}
                    {...register("customer")}
                  />
                </div>
                <div className={styles.phoneNumber}>
                  <Field
                    label={true}
                    innerText="Số điện thoại"
                    classNameInput={styles.input}
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
