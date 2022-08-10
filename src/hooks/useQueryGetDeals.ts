import { QueryClient, useQuery } from "@tanstack/react-query";
import { API, BASE_URL } from "api/axios";
import { DataDeals } from "types/DataDeals";

const getData = async (page: number, searchParams: URLSearchParams) => {
  try {
    const res = await API.get(
      searchParams.get("page")
        ? `${BASE_URL}/uu-dai?page=${page}`
        : `${BASE_URL}/uu-dai`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const useQueryGetDeals = (
  currentPage: number,
  searchParams: URLSearchParams
) => {
  return useQuery<DataDeals>(
    [
      "deals",
      currentPage
        ? currentPage
        : parseInt(searchParams.get("page") ? searchParams.get("page")! : "1"),
    ],
    async () =>
      await getData(
        parseInt(searchParams.get("page") ? searchParams.get("page")! : "1"),
        searchParams
      ),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );
};

export const usePrefetchQueryDeals = (
  queryClient: QueryClient,
  currentPage: number,
  searchParams: URLSearchParams
) => {
  return queryClient.prefetchQuery(["deals", currentPage + 1], () =>
    getData(currentPage + 1, searchParams)
  );
};
