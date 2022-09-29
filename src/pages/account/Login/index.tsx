import styles from "./login.module.scss";
import Field from "components/yup/Field";
import logo from "layout/Header/Image/laut12.png";
import src from "./backgroundLogin.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "components/yup/yupGlobal";
import clsx from "clsx";

import {
  login,
  loginLoading,
} from "redux-toolkit/features/account/accountSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux-toolkit/app/hooks";
import { axiosJWT } from "api/axios";

import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { IoIosLock } from "@react-icons/all-files/io/IoIosLock";

type Inputs = {
  username: string;
  passwordClient: string;
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
  passwordClient: yup
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
      passwordClient: "",
    },
    resolver: yupResolver(schema),
  });
  let { username, passwordClient } = watch();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginLoading());
    axiosJWT
      .post("/login", data)
      .then((response) => response.data)
      .then((response) => {
        dispatch(login(response.data));
      })
      .then(() => navigate("/"))
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
                <span className={styles.focusInput}>
                  <FaUserAlt />
                </span>
              </div>
              <div className={styles.wrappInput}>
                <Field
                  innerText="password"
                  classNameInput={clsx(styles.input, {
                    [`${styles["has-value"]}`]: watch().passwordClient,
                    [`${styles["input-err"]}`]: errors.passwordClient,
                  })}
                  classNameError={styles[`p-err`]}
                  type="password"
                  id="password"
                  placeholder="Password"
                  error={errors.passwordClient?.message}
                  {...register("passwordClient")}
                />
                <span className={styles.focusInput}>
                  <IoIosLock />
                </span>
              </div>
              <Btn
                disabled={
                  username.trim() !== "" && passwordClient.trim() !== ""
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
