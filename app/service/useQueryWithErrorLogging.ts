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
export default function useQueryWithErrorLogging<R>(query: Props<R>): R {
  const { queryKey, queryFn } = query;
  const result = useQuery({
    queryKey,
    queryFn,
    retry: false,
    initialData: query.initialData,
  });
  useEffect(() => {
    if (result.error) {
      console.log(result.error);
    }
  }
    , [result.error]);
  console.log(result.data.data)
  return result.data.data;
}
