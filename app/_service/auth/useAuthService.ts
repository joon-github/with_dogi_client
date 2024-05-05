import { useQuery } from "@tanstack/react-query";
import authQueryOptions from "./authQueryOptions";

export function useMyInfo() {
  return useQuery(authQueryOptions.myInfo());
}

export function useLoginStatus() {
  return useQuery(authQueryOptions.loginStatus());
}
