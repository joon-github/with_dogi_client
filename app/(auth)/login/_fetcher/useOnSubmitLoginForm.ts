import AuthService, { LoginRequest } from "@/app/_service/auth/AuthService";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useOnSubmitLoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const onSubmit = async (data: LoginRequest) => {
    const res = await AuthService.login(data);
    if (res.statusCode === 200) {
      router.back();
      queryClient.invalidateQueries({ queryKey: ["loginStatus"] });
    }
    return res;
  };
  return onSubmit;
}
