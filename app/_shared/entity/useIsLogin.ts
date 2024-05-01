"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "../utils/axiosClient";

export default function useIsLogin() {
  const { data, isSuccess } = useQuery({
    queryKey: ["isLogin"],
    queryFn: async () => {
      return await client.get("/auth/loginCheck");
    },
    staleTime: Infinity,
  });
  if (!isSuccess) {
    return null;
  }
  return data?.data;
}
