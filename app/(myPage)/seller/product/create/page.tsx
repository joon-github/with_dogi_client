"use client";
import SubTitle from "@/app/(myPage)/_components/SubTitle";
import ProductForm from "../_components/ProductForm";
import { useOnSubmitProductForm } from "@/app/_service/product/useProductService";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";

export default function CreateProduct() {
  const onSubmitProductForm = useOnSubmitProductForm();
  const mutation = useLoadingMutation(onSubmitProductForm);
  return (
    <>
      <SubTitle title="상품 추가" />
      <h3 className="text-lg font-bold mb-4">상품 정보</h3>
      <ProductForm mutation={mutation} sunmitButtonText="상품 추가" />
    </>
  );
}
