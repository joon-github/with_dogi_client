import SubTitle from "@/app/(myPage)/_components/SubTitle";
import CrateBrandForm from "./_components/CreateBrandForm";

export default function CreateBrand() {
  return (
    <>
      <SubTitle title="브랜드 추가" />
      <div>
        <CrateBrandForm />
      </div>
    </>
  );
}
