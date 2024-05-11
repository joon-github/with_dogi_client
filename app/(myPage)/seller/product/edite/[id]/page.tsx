"use client";

import { useCheckOwner } from "@/app/_service/product/useProductService";
import ProductForm from "../../_components/ProductForm";
import SubTitle from "@/app/(myPage)/_components/SubTitle";

interface Params {
  id: string;
}
interface Props {
  params: Params;
}

export default function EditeProduct({ params }: Props) {
  const { id } = params;
  const { data, isSuccess } = useCheckOwner(Number(id));
  console.log(data);
  return (
    <>
      <SubTitle title={`${id}번 상품 수정`} />
      <div className="flex flex-col gap-8">
        <ProductForm sunmitButtonText="상품 정보 수정" use={["productInfo"]} />
        <ProductForm
          sunmitButtonText="상품 설명 이미지 수정"
          use={["productImages"]}
        />
        <ProductForm sunmitButtonText="옵션 수정" use={["option"]} />
      </div>
    </>
  );
}
