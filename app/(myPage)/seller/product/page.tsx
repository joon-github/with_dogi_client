"use client";
import { Link } from "@/app/_components/atom"
import SubTitle from "../../_components/SubTitle";
import { useMyProductList } from "@/app/_service/product/useProductService";
import { Image } from "@nextui-org/react";

export default function SellerProducts() {
  const { data: productData, isSuccess } = useMyProductList();
  console.log(productData);
  return (
    <>
      <SubTitle title="상품관리" />
      <div>
        <div>
          <button>
            <Link href="/seller/product/create">상품 추가</Link>
          </button>
          <div>
            {isSuccess &&
              productData?.data?.map((product) => (
                <Link
                  key={product.productId}
                  href={`/seller/product/${product.productId}`}
                >
                  <div
                    key={product.productId}
                    className="flex border border-slate-400 rounded-lg p-2 my-2"
                  >
                    <Image
                      src={product.mainImageUrl || "/no-image.png"}
                      alt={product.productName}
                      width={100}
                      height={100}
                    />
                    <div>
                      <div className="text-base font-bold">
                        {product.productName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
