"use client";
import { Table, Button, Link } from "@/app/_components/atom";
import { useMyProductList } from "@/app/_service/product/useProductService";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import { Pagination } from "@/app/_components/atom";
export default function ProductListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const count = 8;
  const { data: productData } = useMyProductList(count, currentPage);

  return (
    <div className="flex flex-col gap-4">
      <Table
        ariaLabelText="상품 리스트"
        header={[
          "상품명",
          "이미지",
          "상품코드",
          "금액",
          "카테고리",
          "옵션",
          "수정",
        ]}
        body={productData?.data?.map((product) => {
          return {
            rowkey: product.productId,
            상품명: product.productName,
            상품코드: product.productCode,
            이미지: (
              <div className="h-full">
                <Image
                  src={product.mainImageUrl || "/no-image.png"}
                  alt={product.productName}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ),
            금액: product.price + "원",
            카테고리: product.category.categoryName,
            옵션: (
              <Table
                ariaLabelText="옵션 리스트"
                header={["옵션명", "추가금", "수량"]}
                headSize="sm"
                body={product.options.map((option) => {
                  return {
                    rowkey: option.optionId,
                    옵션명: option.optionName,
                    추가금: option.addPrice + "원",
                    수량: option.stock + "개",
                  };
                })}
              />
            ),
            수정: (
              <Link href={`/seller/product/edite/${product.productId}`}>
                <Button>수정</Button>
              </Link>
            ),
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
