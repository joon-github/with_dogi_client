import AuthService, { SignupRequest } from "@/app/_service/auth/AuthService";
import { useQueryClient } from "@tanstack/react-query";
export default function useUserInfoModify() {
  const queryClient = useQueryClient();
  const onSubmit = async (data: SignupRequest) => {
    const res = await AuthService.modify(data);
    if (res.statusCode === 200) {
      queryClient.invalidateQueries({ queryKey: ["myInfo"] });
    }
    return res;
  };
  return onSubmit;
}
