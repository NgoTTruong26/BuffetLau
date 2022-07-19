import styles from "components/Login/login.module.scss";
import Field from "yup/Field";
import logo from "components/layout/Header/Image/laut12.png";
import src from "./backgroundLogin.jpg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "yup/yupGlobal";
import clsx from "clsx";
import Axios from "axios";
import { API } from "configs/service";

type Inputs = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập vào mục này")
    .test(
      "required",
      "Vui lòng nhập vào mục này",
      (value) => value!.trim() !== ""
    ),
  password: yup
    .string()
    .required("Vui lòng nhập vào mục này")
    .test(
      "required",
      "Vui lòng nhập vào mục này",
      (value) => value!.trim() !== ""
    ),
});

function Btn(props: { disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={props.disabled}
      className={styles.logginBtn}
    >
      Đăng Nhập
    </button>
  );
}

export default function Login() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  let { username, password } = watch();

  const onSubmit = handleSubmit((data) => {
    API.post("/login", data)
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error.response);
      });
  });

  return (
    <div style={{ backgroundImage: `url(${src})` }} className={styles.wrapp}>
      <div className={styles.login}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div
              style={{ backgroundImage: `url(${logo})` }}
              className={styles.imageShow}
            >
              <img
                className={styles.image}
                src={logo}
                alt="logo Buffet lau t12"
              />
            </div>
            <div className={styles.title}>Đăng nhập</div>
            <form onSubmit={onSubmit}>
              <div className={styles.wrappInput}>
                <Field
                  label={false}
                  innerText="Tài khoản"
                  classNameInput={clsx(styles.input, {
                    [`${styles["has-value"]}`]: watch().username,
                    [`${styles["input-err"]}`]: errors.username,
                  })}
                  classNameError={styles[`p-err`]}
                  type="text"
                  id="username"
                  placeholder="Username"
                  error={errors.username?.message}
                  {...register("username")}
                />
                <span className={styles.focusInput} data-placeholder=""></span>
              </div>
              <div className={styles.wrappInput}>
                <Field
                  label={false}
                  innerText="password"
                  classNameInput={clsx(styles.input, {
                    [`${styles["has-value"]}`]: watch().password,
                    [`${styles["input-err"]}`]: errors.password,
                  })}
                  classNameError={styles[`p-err`]}
                  type="password"
                  id="password"
                  placeholder="Password"
                  error={errors.password?.message}
                  {...register("password")}
                />
                <span className={styles.focusInput} data-placeholder=""></span>
              </div>
              <Btn
                disabled={
                  username.trim() !== "" && password.trim() !== ""
                    ? false
                    : true
                }
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
