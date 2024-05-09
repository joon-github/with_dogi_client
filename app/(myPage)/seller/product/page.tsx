import { Link } from "@/app/_components/atom";
import SubTitle from "../../_components/SubTitle";
import ProductListTabel from "./_components/ProductListTable"


export default function SellerProducts() {
  return (
    <>
      <SubTitle title="상품관리" />
      <div className="h-full">
        <button>
          <Link href="/seller/product/create">상품 추가</Link>
        </button>
        <div className="h-full">
          <ProductListTabel />
        </div>
      </div>
    </>
  );
}
