import queryOptions from "./queryOptions";
import useQueryWithErrorLogging from "../useQueryWithErrorLogging";
import { Category } from "./Category.entity";
import { useQuery } from "@tanstack/react-query";

export function useCategory(type: string) {
  // return useQueryWithErrorLogging<Category[]>(queryOptions.all(type));
  return useQuery(queryOptions.all(type));
}
