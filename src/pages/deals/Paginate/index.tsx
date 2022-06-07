import { memo, useEffect, useState } from "react";
import styles from "./paginate.module.scss";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";

interface PROPS {
  countPageNumber: number;
  changePage: any;
}

function Paginate({ countPageNumber, changePage }: PROPS) {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [searchParams] = useSearchParams();

  console.log();

  let pageNumbers: number[] = [];

  for (let i = 0; i < countPageNumber; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  useEffect(() => {
    if (
      !searchParams.get("page") ||
      parseInt(searchParams.get("page")!) === 1 ||
      parseInt(searchParams.get("page")!) > countPageNumber
    ) {
      setCurrentPageNumber(1);
    } else {
      setCurrentPageNumber(parseInt(searchParams.get("page")!));
    }
  }, [countPageNumber]);

  const onClick = (pageNumber: number) => {
    setCurrentPageNumber(pageNumber);
    changePage(pageNumber);
  };

  return (
    <div className={styles.paginate}>
      <Link
        to={`?page=${currentPageNumber - 1}`}
        onClick={() => onClick(currentPageNumber - 1)}
      >
        <button
          className={clsx(styles.btn, {
            [styles.disabled]: currentPageNumber === 1,
          })}
          disabled={currentPageNumber === 1}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      </Link>
      {pageNumbers.map((pageNumber) => (
        <Link
          to={`?page=${pageNumber + 1}`}
          key={pageNumber}
          onClick={() => onClick(pageNumber + 1)}
        >
          <button
            className={clsx(styles.btn, {
              [styles.active]: pageNumber === currentPageNumber - 1,
            })}
          >
            {pageNumber + 1}
          </button>
        </Link>
      ))}
      <Link
        to={`?page=${currentPageNumber + 1}`}
        onClick={() => onClick(currentPageNumber + 1)}
      >
        <button
          className={clsx(styles.btn, {
            [styles.disabled]: currentPageNumber >= countPageNumber,
          })}
          disabled={currentPageNumber >= countPageNumber}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </Link>
    </div>
  );
}

export default memo(Paginate);
