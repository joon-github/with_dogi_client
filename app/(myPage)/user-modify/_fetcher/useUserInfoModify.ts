import AuthService, { SignupRequest } from "@/app/_service/auth/AuthService";
import { useRouter } from "next/navigation";
export default function useUserInfoModify() {
  const router = useRouter();
  const onSubmit = async (data: SignupRequest) => {
    const res = await AuthService.modify(data);
    if (res.statusCode === 200) {
      router.push("/myPage");
    }
  };
  return onSubmit;
}
