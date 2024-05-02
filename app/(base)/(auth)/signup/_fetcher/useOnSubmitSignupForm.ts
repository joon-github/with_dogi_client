import useOnSubmitLoginForm from "../../login/_fetcher/useOnSubmitLoginForm";
import AuthService, { SignupRequest } from "@/app/_service/auth/AuthService";


export default function useOnSubmitSignupForm() {
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
