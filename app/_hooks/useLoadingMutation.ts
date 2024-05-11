import { useMutation } from "@tanstack/react-query";
import useAlert from "../_hooks/useAlert";
import { AlertStatus } from "../_components/block/Alert";
import { useSetRecoilState } from "recoil";
import { loaderState } from "@/app/Store/loaderAtom";
const useLoadingMutation = (mutationFn: (...args: any[]) => any) => {
  const { alert } = useAlert();
  const setIsloading = useSetRecoilState(loaderState);
  return useMutation({
    mutationFn: async (...args) => {
      setIsloading(true);
      return await mutationFn(...args);
    },
    onSettled: () => {
      setIsloading(false);
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
