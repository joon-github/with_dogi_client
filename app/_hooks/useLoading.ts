import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useLoading(isLoading: boolean) {
  const queryClient = useQueryClient();
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        queryClient.setQueryData(["isLoading"], true);
      }, 0);
    } else {
      setTimeout(() => {
        queryClient.setQueryData(["isLoading"], false);
      }, 0);
    }
  }, [isLoading]);
}
