import { AlertStatus } from "@/app/_components/block/Alert";
import useAlert from "@/app/_hooks/useAlert";
import AuthService from "@/app/_service/auth/AuthService";
import { AuthQueryKey } from "@/app/_service/auth/authQueryOptions";
import { useQueryClient } from "@tanstack/react-query";
export default function useProfileUpdate() {
  const queryClient = useQueryClient();
  const { alert } = useAlert();
  const onSubmit = async (file: File) => {
    if (!file) {
      alert("파일를 선택해주세요.", AlertStatus.Error);
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    const res = await AuthService.profileUpdate(formData);
    if (res.statusCode === 200) {
      queryClient.invalidateQueries({ queryKey: AuthQueryKey.info() });
    }
  };
  return onSubmit;
}
