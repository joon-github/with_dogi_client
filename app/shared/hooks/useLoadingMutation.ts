import { useMutation, useQueryClient } from "@tanstack/react-query";

const useLoadingMutation = (mutationFn: (...args: any[]) => any) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (...args) => {
      queryClient.setQueryData(["isLoading"], true);
      return await mutationFn(...args);
    },
    onSettled: () => {
      queryClient.setQueryData(["isLoading"], false);
    },
  });
};

export default useLoadingMutation;
