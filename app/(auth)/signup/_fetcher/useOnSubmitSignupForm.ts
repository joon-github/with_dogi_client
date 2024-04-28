import { MyResponseType, client } from "@/app/_shared/utils/axiosClient";
import useOnSubmitLoginForm from "../../login/_fetcher/useOnSubmitLoginForm";

interface SignupForm {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  address: string;
}

export default function useOnSubmitSignupForm() {
  const login = useOnSubmitLoginForm();
  const onSubmit = async (data: SignupForm) => {
    const res = (await client.post("/auth/signup", data)) as MyResponseType;
    console.log(res);
    if (res?.statusCode === 201) {
      await login({
        email: data.email,
        password: data.password,
      });
    }
  };
  return onSubmit;
}
