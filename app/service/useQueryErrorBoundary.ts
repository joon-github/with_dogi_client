import { useQuery } from "@tanstack/react-query";
interface ResponseType<R> {
  statusCode: number;
  message: string | null;
  data: R;
}
interface Props {
  queryKey: string[];
  queryFn: () => Promise<ResponseType<any>>;
}
export default function useQueryErrorBoundary(query: Props) {
  const { queryKey, queryFn } = query;
  return useQuery({
    queryKey,
    queryFn,
    retry: false,
  });
}
