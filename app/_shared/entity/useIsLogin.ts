"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "../utils/axiosClient";

export default function useIsLogin() {
  const { data } = useQuery({
    queryKey: ["isLogin"],
    queryFn: async () => {
      return await client.get("/auth/loginCheck");
    },
    staleTime: Infinity,
  });
  return data?.data || false;
}
