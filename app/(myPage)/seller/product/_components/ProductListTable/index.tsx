"use client"
import { Table } from "@/app/_components/atom";
import { useMyProductList } from "@/app/_service/product/useProductService";
import { Image } from "@nextui-org/react";
export default function ProductListTable(){
  const { data: productData } = useMyProductList();
  return(
    <Table
      ariaLabelText="상품 리스트"
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
  )
}