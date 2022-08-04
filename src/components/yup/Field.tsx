import styles from "components/yup/yup.module.scss";
import clsx from "clsx";

import { forwardRef } from "react";

interface Props {
  innerText: string;
  classNameInput: string;
  type: string;
  id: string;
  label?: boolean;
  placeholder?: string;
  classNameError?: string;
  error?: string;
}

function Field(
  {
    label,
    placeholder = "",
    innerText,
    classNameInput,
    classNameError,
    type,
    error,
    id,
    ...props
  }: Props,
  ref: any
) {
  return (
    <>
      {label && <label htmlFor={id}>{innerText}</label>}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        className={clsx(classNameInput, {
          classNameLogic: (onchange = (e: any) => e.target.value),
        })}
        id={id}
        {...props}
      />
      {error && (
        <p
          className={clsx(styles.error, classNameError)}
          dangerouslySetInnerHTML={{ __html: error }}
        ></p>
      )}
    </>
  );
}

export default forwardRef(Field);
