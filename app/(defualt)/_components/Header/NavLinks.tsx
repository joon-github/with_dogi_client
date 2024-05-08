"use client";
import { Link } from "@/app/_components/atom"
import useGetLinkStyle from "@/app/_utils/getLinkStyle";

export default function NavLinks() {
  const getLinkStyle = useGetLinkStyle();
  return (
    <div className="flex gap-6 text-base text-nowrap">
      <Link href="/products">
        <div className={getLinkStyle("products")}>상품</div>
      </Link>
      <Link href="/community">
        <div className={getLinkStyle("community")}>커뮤니티</div>
      </Link>
    </div>
  );
}
