import { useQuery } from "@tanstack/react-query";
import queryOptions from "./queryOptions";

export function useMyInfo() {
  return useQuery(queryOptions.myInfo());
}
