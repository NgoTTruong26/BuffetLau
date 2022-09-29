import styles from "./deals.module.scss";
import { useEffect, useState } from "react";
import Paginate from "./Paginate";
import ContentPost from "./ContentPost";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  usePrefetchQueryDeals,
  useQueryGetDeals,
} from "hooks/useQueryGetDeals";

export default function Deals() {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(searchParams.get("page") ? searchParams.get("page")! : "1")
  );

  const queryClient = useQueryClient();

  const query = useQueryGetDeals(currentPage, searchParams);

  const { status, data, isFetching } = query;

  const prefetchQueryDeals = usePrefetchQueryDeals;

  useEffect(() => {
    if (data) {
      if (currentPage < data.totalPage) {
        prefetchQueryDeals(queryClient, currentPage, searchParams);
      }
    }
  }, [data, queryClient, currentPage]);

  const handleChangePage = (e: number) => {
    setCurrentPage(e);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.titleContent}>Ưu Đãi</div>
        </div>
        <ContentPost data={data! && data.data} />
        <div className={styles.paginate}>
          <Paginate
            countPageNumber={data! && data.totalPage}
            changePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
