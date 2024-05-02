import queryOptions from "./queryOptions";
import { useQuery } from "@tanstack/react-query";

export function useCategory(type: string) {
  return useQuery(queryOptions.all(type));
}
