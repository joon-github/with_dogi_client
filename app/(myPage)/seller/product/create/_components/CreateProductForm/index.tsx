"use client";
import FormComponents from "@/app/_components/block/Form";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { useMyBrand } from "@/app/_service/product/useProductService";

export default function CrateProductForm() {
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
    <FormComponents>
      <FormComponents.Form
        onSubmit={(data) => {
          console.log(data);
        }}
        text="상품등록"
        isLoading={false}
      >
        <FormComponents.Item label="상품 이름" fieldKey="productName">
          <FormComponents.Input maxLength={100} />
        </FormComponents.Item>
        <FormComponents.Item label="상품 설명" fieldKey="description">
          <FormComponents.Input type="textarea" maxLength={15} />
        </FormComponents.Item>
        <FormComponents.Item label="기본 금액" fieldKey="price">
          <FormComponents.Input type="number" maxLength={15} />
        </FormComponents.Item>
        <div className="flex gap-4">
          <FormComponents.Item
            label="카테고리"
            fieldKey="categoryId"
            className="flex-1"
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
      </FormComponents.Form>
    </FormComponents>
  );
}
