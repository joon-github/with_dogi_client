"use client";
import { Link, Table } from "@/app/_components/atom";
import SubTitle from "../../_components/SubTitle";
import { useMyProductList } from "@/app/_service/product/useProductService";
import { Image } from "@nextui-org/react";

export default function SellerProducts() {
  const { data: productData, isPending } = useMyProductList();
  return (
    <>
      <SubTitle title="상품관리" />
      <div>
        <button>
          <Link href="/seller/product/create">상품 추가</Link>
        </button>
        <div>
          <Table
            ariaLabelText="상품 리스트"
            isLoading={isPending}
            header={["이미지", "상품명", "금액"]}
            body={productData?.data?.map((product) => {
              return {
                이미지: (
                  <Image
                    key={product.productId}
                    src={product.mainImageUrl || "/no-image.png"}
                    alt={product.productName}
                    width={140}
                    height={140}
                  />
                ),
                상품명: product.productName,
                금액: product.price,
              };
            })}
          />
        </div>
      </div>
    </>
  );
}
