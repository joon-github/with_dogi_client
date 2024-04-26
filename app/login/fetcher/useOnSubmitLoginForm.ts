import { MyResponseType, client } from "@/app/shared/utils/axiosClient";
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
    const res = (await client.post("/auth/login", data)) as MyResponseType;
    if (res.statusCode === 200) {
      router.push("/");
      queryClient.invalidateQueries({ queryKey: ["isLogin"] });
    }
    return res;
  };
  return onSubmit;
}
