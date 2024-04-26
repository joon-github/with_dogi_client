"use client";
import { useQuery } from "@tanstack/react-query";
import { client } from "../utils/axiosClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useLoginCheck() {
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["isLogin"],
    queryFn: async () => {
      return await client.get("/auth/loginCheck");
    },
    staleTime: Infinity,
  });
  useEffect(() => {
    if (data && data.data) {
      router.push("/login");
    }
  }, [data, router]);
  return true;
}
