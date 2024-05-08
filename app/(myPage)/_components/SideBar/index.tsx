"use client";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
import { Link } from "@/app/_components/atom"
import Section from "./Section";
import useGetLinkStyle from "@/app/_utils/getLinkStyle";

export default function SideBar() {
  const getLinkStyle = useGetLinkStyle();
  const { data: myInfo } = useMyInfo();
  return (
    <nav className="flex flex-col w-[220px] border-r border-slate-400 bg-slate-100">
      <Section title="MY 정보">
        <Link href="/user-modify">
          <div className={getLinkStyle("user-modify")}>개인정보 확인/수정</div>
        </Link>
      </Section>
      <Section title="MY 쇼핑">
        <Link href="/mypage/order">
          <div className={getLinkStyle("order")}>주문 내역</div>
        </Link>
        <Link href="/mypage/wish">
          <div className={getLinkStyle("wish")}>문의 내역</div>
        </Link>
      </Section>
      <Section title="커뮤니티">
        <Link href="/mypage/post">
          <div className={getLinkStyle("post")}>게시글</div>
        </Link>
      </Section>
      {myInfo?.data?.role === "seller" && (
        <Section title="판매자">
          <Link href="/seller/sales-history">
            <div className={getLinkStyle("sales-history")}>판매 내역</div>
          </Link>
          <Link href="/seller/brand">
            <div className={getLinkStyle("brand")}>브랜드 관리</div>
          </Link>
          <Link href="/seller/product">
            <div className={getLinkStyle("product")}>상품 관리</div>
          </Link>
        </Section>
      )}
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
