import { useQuery } from "@tanstack/react-query";
import getCateory from "./getCategory";

export default function useCategory(type: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCateory(type),
    staleTime: Infinity,
  });
  return { data, error, isLoading };
}
