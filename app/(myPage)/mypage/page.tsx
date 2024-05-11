"use client";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
export default function MyPage() {
  const { data: myInfo } = useMyInfo();
  return <main>myPage</main>;
}
