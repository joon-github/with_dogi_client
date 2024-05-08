"use client";
import { Link } from "@/app/_components/atom"
import SubTitle from "../../_components/SubTitle";
import { useMyBrand } from "@/app/_service/product/useProductService";

export default function SellerBrand() {
  const { data: brandData, isSuccess } = useMyBrand();
  console.log(brandData);
  return (
    <>
      <SubTitle title="브랜드 관리" />
      <div>
        <div>
          <button>
            <Link href="/seller/brand/create">브랜드 추가</Link>
          </button>
        </div>
      </div>
    </>
  );
}
