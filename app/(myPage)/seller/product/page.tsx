"use client";
import Link from "next/link";
import SubTitle from "../../_components/SubTitle";
import useAlert from "@/app/_hooks/useAlert";

export default function SellerProducts() {
  const { alert } = useAlert();
  return (
    <>
      <SubTitle title="상품관리" />
      <div>
        <div>
          <button>
            <Link href="/seller/product/create">상품 추가</Link>
          </button>
          <button
            onClick={() => {
              alert("상품이 추가되었습니다.");
            }}
          >
            test
          </button>
        </div>
      </div>
    </>
  );
}
