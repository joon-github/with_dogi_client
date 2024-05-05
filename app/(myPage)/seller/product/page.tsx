import Link from "next/link";
import SubTitle from "../../_components/SubTitle";

export default function SellerProducts() {
  return (
    <>
      <SubTitle title="상품관리" />
      <div>
        <div>
          <button>
            <Link href="/seller/product/create">상품 추가</Link>
          </button>
        </div>
      </div>
    </>
  );
}
