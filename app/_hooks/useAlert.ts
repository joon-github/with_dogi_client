"use client";
import { useQueryClient } from "@tanstack/react-query";
import { AlertStatus } from "../_components/block/Alert";

export default function useAlert() {
  const queryClient = useQueryClient();
  return {
    alert: (message: string, status: AlertStatus) => {
      queryClient.setQueryData(["alert"], {
        isShow: true,
        message,
        status,
      });
      setTimeout(() => {
        queryClient.setQueryData(["alert"], {
          isShow: false,
          message: "",
        });
      }, 2000);
    },
  };
}
