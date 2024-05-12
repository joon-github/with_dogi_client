"use client";

import {
  useCheckOwner,
  useModifyProduct,
} from "@/app/_service/product/useProductService";
import ProductForm from "../../_components/ProductForm";
import SubTitle from "@/app/(myPage)/_components/SubTitle";
import { Direction } from "@/app/_components/block/Form/Form";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";

interface Params {
  id: string;
}
interface Props {
  params: Params;
}

export default function EditeProduct({ params }: Props) {
  const { id } = params;
  const { data, isSuccess } = useCheckOwner(Number(id));
  const submit = useModifyProduct(Number(id));
  const mutation = useLoadingMutation(submit);
  return (
    <>
      <SubTitle title={`${id}번 상품 수정`} />
      <h3 className="text-lg font-bold mb-4">상품 정보</h3>
      <ProductForm
        sunmitButtonText="상품 이름 수정"
        mutation={mutation}
        use={["productName"]}
        direction={Direction.ROW}
        defaultValues={{
          productName: data?.data?.productName,
        }}
      />
      <ProductForm
        sunmitButtonText="상품 설명 수정"
        mutation={mutation}
        use={["description"]}
        direction={Direction.ROW}
        defaultValues={{
          description: data?.data?.description,
        }}
      />
      <ProductForm
        sunmitButtonText="상품 금액 수정"
        mutation={mutation}
        use={["price"]}
        direction={Direction.ROW}
        defaultValues={{
          price: data?.data?.price,
        }}
      />
      <ProductForm
        sunmitButtonText="카테고리 수정"
        mutation={mutation}
        use={["category"]}
        direction={Direction.ROW}
        defaultValues={{
          categoryId: data?.data?.category.categoryId,
        }}
      />
      <ProductForm
        sunmitButtonText="브랜드 수정"
        mutation={mutation}
        use={["brand"]}
        direction={Direction.ROW}
        defaultValues={{
          brandId: data?.data?.brand.brandId,
        }}
      />
      {/* <ProductForm
          sunmitButtonText="상품 설명 이미지 수정"
          use={["productImages"]}
        />
        <ProductForm sunmitButtonText="옵션 수정" use={["option"]} /> */}
    </>
  );
}
