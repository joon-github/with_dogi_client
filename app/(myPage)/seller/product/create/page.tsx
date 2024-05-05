import SubTitle from "@/app/(myPage)/_components/SubTitle";
import CrateProductForm from "./_components/CreateProductForm";

export default function CreateProduct() {
  return (
    <>
      <SubTitle title="상품추가" />
      <div>
        <CrateProductForm />
      </div>
    </>
  );
}
