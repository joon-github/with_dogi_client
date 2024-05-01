"use client";
import { useMyInfo } from "@/app/service/auth/useAuthService";
export default function MyPage() {
  const { data: myInfo } = useMyInfo();
  console.log(myInfo);
  return <main>myPage</main>;
}
