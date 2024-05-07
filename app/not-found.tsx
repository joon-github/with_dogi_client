import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-slate-50">
      <h1 className="font text-5xl"><span className="text-lime-600">요청하신 페이지를</span> 찾을 수 없습니다.</h1>
      <div className="mt-[180px] text-center shadow-2xl p-20 rounded-xl">
        <div className="flex justify-center relative">
          <Image 
            src="/dogi.png" 
            width={150}
            height={240} 
            alt="dog" 
            className="absolute top-[-250px]"
          />
        </div>
        <p>찾으시려는 페이지는 주소를 잘못 입력하였거나</p>
        <p>페이지 주소의 변경 또는 삭제등의 이유로 페이지를 찾을 수 없습니다.</p>
        <p>입력하신 페이지의 주소와 경로가 정확한지 한번 더 확인 후 이용하시기 바랍니다.</p>
        <div className="text-2xl text-lime-600 my-4">서비스 이용에 불편을 드려 죄송합니다.</div>
        <button className="text-xl border rounded-xl p-4 bg-lime-200">
          <Link href="/products">홈으로 이동</Link>
        </button>
      </div>
    </div>
  );
}
