import { Link } from "@/app/_components/atom";
import SubTitle from "../../_components/SubTitle";
import ProductListTabel from "./_components/ProductListTable";
import { Button } from "@/app/_components/atom";

export default function SellerProducts() {
  return (
    <>
      <SubTitle title="상품관리">
        <Button>
          <Link href="/seller/product/create">상품 추가</Link>
        </Button>
      </SubTitle>
      <div className="flex flex-col gap-4 h-full">
        <ProductListTabel />
      </div>
    </>
  );
}
