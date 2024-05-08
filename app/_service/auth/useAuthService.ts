import { useQuery } from "@tanstack/react-query";
import authQueryOptions from "./authQueryOptions";
import { useRouter } from "next/navigation";
import AuthService, {LoginRequest} from "./AuthService";
import { useQueryClient } from "@tanstack/react-query";

export function useMyInfo() {
  return useQuery(authQueryOptions.myInfo());
}

export function useLoginStatus() {
  return useQuery(authQueryOptions.loginStatus());
}

export async function useLogout(){
  await AuthService.logout();
  const router = useRouter();
  router.push("/products");
}

export function useOnSubmitLoginForm() {
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

export function useOnSubmitSignupForm() {
  const login = useOnSubmitLoginForm();
  const onSubmit = async (data: SignupRequest) => {
    const res = await AuthService.signup(data);
    if (res?.statusCode === 201) {
      await login({
        email: data.email,
        password: data.password,
      });
    }
  };
  return onSubmit;
}
}