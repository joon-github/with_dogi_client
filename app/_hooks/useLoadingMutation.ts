import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAlert from "../_hooks/useAlert";
import { AlertStatus } from "../_components/block/Alert";

const useLoadingMutation = (mutationFn: (...args: any[]) => any) => {
  const queryClient = useQueryClient();
  const { alert } = useAlert();
  return useMutation({
    mutationFn: async (...args) => {
      queryClient.setQueryData(["isLoading"], true);
      return await mutationFn(...args);
    },
    onSettled: () => {
      queryClient.setQueryData(["isLoading"], false);
    },
    onSuccess: (res) => {
      if (res.message) {
        alert(res.message, AlertStatus.Success);
      }
    },
    onError: (err) => {
      if (err.message) {
        alert(err.message, AlertStatus.Error);
      }
    },
  });
};

export default useLoadingMutation;
