"use client";
import { useQueryClient } from "@tanstack/react-query";

export default function useAlert() {
  const queryClient = useQueryClient();
  return {
    alert: (message: string) => {
      queryClient.setQueryData(["alert"], {
        isShow: true,
        message,
      });
      setTimeout(() => {
        queryClient.setQueryData(["alert"], {
          isShow: false,
          message: "",
        });
      }, 1000);
    },
  };
}
