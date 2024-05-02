"use client";
import Link from "next/link";
import IconText from "../../../../_components/block/IconText";
import { SlUser } from "react-icons/sl";
import { CiShoppingCart } from "react-icons/ci";
import { Skeleton } from "../../../../_components/atom";
import { useLoginStatus } from "@/app/_service/auth/useAuthService";

export default function UserNavigation() {
  const { data: loginStatus } = useLoginStatus();
  return (
    <Skeleton isLoaded={loginStatus !== undefined}>
      <div className="w-[280px] flex gap-6">
        <IconText icon={<CiShoppingCart size={40} />}>
          <Link href="/cart">
            <div>장바구니</div>
          </Link>
        </IconText>
        <IconText icon={<SlUser size={28} />}>
          {loginStatus?.data ? (
            <div>
              <Link href="/user-modify">
                <div>내 정보</div>
              </Link>
            </div>
          ) : (
            <div className="flex gap-1">
              <Link href="/login">
                <div>로그인</div>
              </Link>
              <span>|</span>
              <Link href="/signup">
                <div>회원가입</div>
              </Link>
            </div>
          )}
        </IconText>
      </div>
    </Skeleton>
  );
}
