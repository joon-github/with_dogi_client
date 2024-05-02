"use client";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
import Link from "next/link";
import Section from "./Section";

export default function SideBar() {
  const { data: myInfo } = useMyInfo();
  return (
    <nav className="flex flex-col w-[200px] border-r border-slate-400 bg-slate-100">
      <Section title="MY 정보">
        <Link href="/mypage/edit">개인정보확인/수정</Link>
      </Section>
      <Section title="MY 쇼핑">
        <Link href="/mypage/order">주문 내역 조회</Link>
        <Link href="/mypage/wish">문의 내역</Link>
        {myInfo?.data?.role === "seller" && <Link href="/seller">판매자</Link>}
      </Section>
      <Section title="커뮤니티">
        <Link href="/mypage/post">게시글</Link>
      </Section>
      {myInfo?.data?.role === "admin" && (
        <Section title="관리자">
          <Link href="/admin">관리자</Link>
        </Section>
      )}
    </nav>
  );
}
