"use client";
import useIsLogin from "../../entity/useIsLogin";
import Link from "next/link";
import IconText from "../molecule/IconText";
import { SlUser } from "react-icons/sl";
import { CiShoppingCart } from "react-icons/ci";
import { Skeleton } from "../atom";

export default function UserNavigation() {
  const isLogin = useIsLogin();
  return (
    <Skeleton isLoaded={isLogin !== null}>
      <div className="w-[280px] flex gap-6">
        <IconText icon={<CiShoppingCart size={40} />}>
          <Link href="/cart">
            <div>장바구니</div>
          </Link>
        </IconText>
        <IconText icon={<SlUser size={28} />}>
          {isLogin ? (
            <div>
              <Link href="/mypage">
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
