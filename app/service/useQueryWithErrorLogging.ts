import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
interface ResponseType<R> {
  statusCode: number;
  message: string | null;
  data: R;
}
interface Props<R>{
  readonly queryKey:  string[];
  queryFn: () => Promise<ResponseType<R>>;
  initialData?: any;
}
export default function useQueryWithErrorLogging<R>(query: Props<R>): ResponseType<R> {
  const { queryKey, queryFn } = query;
  const result = useQuery({
    queryKey,
    queryFn,
    retry: false,
    initialData: query.initialData,
  });
  return result?.data;
}
