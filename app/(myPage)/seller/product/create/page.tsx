import SubTitle from "@/app/(myPage)/_components/SubTitle";
import ProductForm from "../_components/ProductForm";

export default function CreateProduct() {
  return (
    <>
      <SubTitle title="상품 추가" />
      <ProductForm sunmitButtonText="상품 추가" />
    </>
  );
}
