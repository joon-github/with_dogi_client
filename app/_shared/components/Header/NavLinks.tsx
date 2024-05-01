"use client";
import { useSelectedLayoutSegments } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const segments = useSelectedLayoutSegments();
  // 현재 경로에 따라 굵은 글씨 스타일 적용
  const getLinkStyle = (path: string) => {
    console.log(segments, path);
    return segments.includes(path) ? "font-bold" : "";
  };

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
