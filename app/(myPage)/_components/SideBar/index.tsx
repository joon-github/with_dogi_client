"use client";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
import Link from "next/link";
import Section from "./Section";
import useGetLinkStyle from "@/app/_utils/getLinkStyle";

export default function SideBar() {
  const getLinkStyle = useGetLinkStyle();
  const { data: myInfo } = useMyInfo();
  return (
    <nav className="flex flex-col w-[200px] border-r border-slate-400 bg-slate-100">
      <Section title="MY 정보">
        <Link href="/mypage/user-modify">
          <div className={getLinkStyle("user-modify")}>개인정보확인/수정</div>
        </Link>
      </Section>
      <Section title="MY 쇼핑">
        <Link href="/mypage/order">
          <div className={getLinkStyle("order")}>주문내역</div>
        </Link>
        <Link href="/mypage/wish">문의 내역</Link>
        {myInfo?.data?.role === "seller" && (
          <Link href="/seller">
            <div className={getLinkStyle("seller")}>판매자</div>
          </Link>
        )}
      </Section>
      <Section title="커뮤니티">
        <Link href="/mypage/post">
          <div className={getLinkStyle("post")}>게시글</div>
        </Link>
      </Section>
      {myInfo?.data?.role === "admin" && (
        <Section title="관리자">
          <Link href="/admin">
            <div className={getLinkStyle("admin")}>관리자</div>
          </Link>
        </Section>
      )}
    </nav>
  );
}
