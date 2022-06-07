import Axios from "axios";
import styles from "./deals.module.scss";
import { useEffect, useState } from "react";
import Paginate from "./Paginate";
import ContentPost from "./ContentPost";
import { useSearchParams } from "react-router-dom";

interface DATA {
  count: number;
  rows: [];
  totalPage: number;
}

export default function Deals() {
  let [data, setData] = useState<DATA>({} as DATA);

  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>();
  console.log(searchParams.get("page"));

  useEffect(() => {
    setData(() => {
      window.scrollTo(0, 0);
      return {} as DATA;
    });
    Axios.get(
      searchParams.get("page")
        ? `http://localhost:3001/uu-dai?page=${searchParams.get("page")}`
        : `http://localhost:3001/uu-dai`
    )
      .then((response) => {
        console.log(response);

        return response.data;
      })
      .then((data) => setData(data));
  }, [currentPage]);

  const handleChangePage = (e: number) => {
    setCurrentPage(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.titleContent}>Ưu Đãi</div>
        </div>
        <ContentPost data={data && data.rows} />
        <div className={styles.paginate}>
          <Paginate
            countPageNumber={data && data.totalPage}
            changePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
