import FormComponents from "@/app/_components/block/Form";
import ImageUpload from "@/app/_components/block/ImageUpload";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { useMyBrand } from "@/app/_service/product/useProductService";
import { required } from "@/app/_utils/validations";
import { useState } from "react";

export default function ProductInfo() {
  const [mainImage, setMainImage] = useState<string>("");
  const { data: categories } = useCategory("product");
  const { data: brandData } = useMyBrand();
  const seleteDataSetting = (
    data: any,
    idkey: string,
    valuekey: string,
    labelkey: string
  ) => {
    return (
      data?.map((item: any) => ({
        id: item[idkey],
        value: item[valuekey],
        label: item[labelkey],
      })) || []
    );
  };
  return (
    <div>
      <div id="product" className="flex-1 p-4">
        <h3 className="text-lg font-bold mb-4">상품 정보</h3>
        <FormComponents.Item
          label="상품 이름"
          fieldKey="productName"
          validation={required("상품 이름를 입력해 주세요.")}
        >
          <FormComponents.Input maxLength={100} />
        </FormComponents.Item>
        <FormComponents.Item
          label="상품 설명"
          fieldKey="description"
          validation={required("상품 설명을 입력해 주세요.")}
        >
          <FormComponents.Input type="textarea" maxLength={15} />
        </FormComponents.Item>
        <FormComponents.Item
          label="기본 금액"
          fieldKey="price"
          validation={required("금액를 입력해 주세요.")}
        >
          <FormComponents.Input type="number" maxLength={15} />
        </FormComponents.Item>
        <div className="flex gap-4">
          <FormComponents.Item
            label="카테고리"
            fieldKey="categoryId"
            className="flex-1"
            validation={required("카테고리를 선택해 주세요.")}
          >
            <FormComponents.Selects
              ariaLabel="카테고리"
              data={categories?.data?.map((item) => ({
                id: item.categoryId,
                value: item.categoryId,
                label: item.categoryName,
                children: seleteDataSetting(
                  item.children,
                  "categoryId",
                  "categoryId",
                  "categoryName"
                ),
              }))}
            />
          </FormComponents.Item>
          <FormComponents.Item
            label="브랜드"
            fieldKey="brandId"
            className="flex-1"
            validation={required("브랜드를 선택해 주세요.")}
          >
            <FormComponents.Selects
              ariaLabel="브랜드"
              data={seleteDataSetting(
                brandData?.data,
                "brandId",
                "brandId",
                "brandName"
              )}
            />
          </FormComponents.Item>
        </div>
        <FormComponents.Item
          label="대표 이미지"
          fieldKey={`mainImage`}
          value={mainImage}
        >
          <FormComponents.Input className="hidden" />
          <ImageUpload setImages={setMainImage} />
        </FormComponents.Item>
      </div>
    </div>
  );
}
