import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAlert from "../_hooks/useAlert";

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
      console.log(res);
    },
    onError: (err) => {
      alert(err.message);
    },
  });
};

export default useLoadingMutation;
