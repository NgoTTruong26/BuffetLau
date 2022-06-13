import styles from "yup/yup.module.scss";

import { forwardRef } from "react";

interface Props {
  innerText: string;
  className: string;
  type: string;
  id: string;
  error?: string;
}

function Field(
  { innerText, className, type, error, id, ...props }: Props,
  ref: any
) {
  return (
    <div>
      <label htmlFor={id}>{innerText}</label>
      <input ref={ref} type={type} className={className} id={id} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default forwardRef(Field);
