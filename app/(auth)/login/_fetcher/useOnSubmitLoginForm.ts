import { MyResponseType, client } from "@/app/_shared/utils/axiosClient";
import AuthService from "@/app/service/auth/AuthService";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
interface LoginForm {
  email: string;
  password: string;
}

export default function useOnSubmitLoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const onSubmit = async (data: LoginForm) => {
    const res = await AuthService.login(data.email, data.password);
    if (res.statusCode === 200) {
      router.push("/");
      queryClient.invalidateQueries({ queryKey: ["loginStatus"] });
    }
    return res;
  };
  return onSubmit;
}
