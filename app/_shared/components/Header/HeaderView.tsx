"use client";
import Logo from "../molecule/Logo";
import IconText from "../molecule/IconText";
import { CiShoppingCart } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import SearchInput from "../molecule/SearchInput";
import Link from "next/link";
import useIsLogin from "../../entity/useIsLogin";
import useCategory from "../../entity/category/useCategory";

export default function HeaderView() {
  const isLogin = useIsLogin();
  const { data } = useCategory("product");
  console.log("data", data);
  return (
    <header className="py-4 px-6">
      <div className="flex items-center gap-10">
        <div className="min-w-[200px]">
          <Logo href="/" width={200} />
        </div>
        <div className="flex flex-1 items-center gap-10">
          <SearchInput />
          <div className="flex gap-4">
            <IconText icon={<CiShoppingCart size={40} />}>
              <Link href="/cart">
                <div>장바구니</div>
              </Link>
            </IconText>
            <IconText icon={<SlUser size={28} />}>
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
            </IconText>
          </div>
        </div>
      </div>
    </header>
  );
}
