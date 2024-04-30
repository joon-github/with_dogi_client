'use client';
import useIsLogin from "../../entity/useIsLogin";
import Link from "next/link";
export default function LoginStatus() { 
  const isLogin = useIsLogin();
  return (
    <>
      {isLogin ? (
        <div>
          <Link href="/mypage">
            <div>my page</div>
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
    </>
  )
}