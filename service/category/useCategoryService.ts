import { useQuery } from "@tanstack/react-query";
import queryOptions from "./queryOptions";

export function useCategory(type: string) {
  return useQuery(queryOptions.all(type));
}
