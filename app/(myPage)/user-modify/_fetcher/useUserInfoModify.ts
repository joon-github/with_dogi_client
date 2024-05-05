import AuthService, { SignupRequest } from "@/app/_service/auth/AuthService";
export default function useUserInfoModify() {
  const onSubmit = async (data: SignupRequest) => {
    await AuthService.modify(data);
  };
  return onSubmit;
}
