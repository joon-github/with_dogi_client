"use client";
import { Table } from "@/app/_components/atom";
import { useMyProductList } from "@/app/_service/product/useProductService";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import { Pagination } from "@/app/_components/atom";
export default function ProductListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const count = 8;
  const { data: productData } = useMyProductList(count, currentPage);
  console.log(productData);
  return (
    <div className="flex flex-col gap-4">
      <Table
        ariaLabelText="상품 리스트"
        header={["상품명", "이미지", "상품코드", "금액", "카테고리", "옵션"]}
        body={productData?.data?.map((product) => {
          return {
            rowkey: product.productId,
            상품명: product.productName,
            상품코드: product.productCode,
            이미지: (
              <Image
                src={product.mainImageUrl || "/no-image.png"}
                alt={product.productName}
                width={140}
                height={140}
              />
            ),
            금액: product.price,
            카테고리: product.category.categoryName,
            옵션: product.options.map((option) => option.optionName).join(","),
          };
        })}
      />
      <Pagination
        total={productData?.total}
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
