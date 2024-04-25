import Link from "next/link";
export default function NotFound() {
  return (
    <div>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link href="/">메인페이지 이동</Link>
    </div>
  );
}
