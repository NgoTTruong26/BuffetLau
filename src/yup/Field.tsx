import styles from "yup/yup.module.scss";

import { forwardRef, useEffect, useRef } from "react";

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
  console.log(typeof error);

  const refErr: { current: any } = useRef(null);

  useEffect(() => {
    if (error) {
      refErr.current!.innerHTML = error;
    }
  }, [error]);
  return (
    <div>
      <label htmlFor={id}>{innerText}</label>
      <input ref={ref} type={type} className={className} id={id} {...props} />
      {error && <p className={styles.error} ref={refErr}></p>}
    </div>
  );
}

export default forwardRef(Field);
