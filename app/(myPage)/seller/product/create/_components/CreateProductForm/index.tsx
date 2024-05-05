"use client";
import FormComponents from "@/app/_components/block/Form";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { useMyBrand } from "@/app/_service/product/useProductService";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import useOnSubmitProductForm from "../../_fetcher/useOnSubmitProductForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";

interface Option {
  optionName: string;
  addPrice: number;
  stock: number;
}
export default function CrateProductForm() {
  const { data: categories } = useCategory("product");
  const { data: brandData } = useMyBrand();
  const [addOption, setAddOption] = useState<Option[]>([]);
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

  const onSubmitProductForm = useOnSubmitProductForm();
  const { mutate: onSubmit, isPending } =
    useLoadingMutation(onSubmitProductForm);
  const onClickAddOption = () => {
    setAddOption([...addOption, { optionName: "", addPrice: 0, stock: 0 }]);
  };
  return (
    <FormComponents>
      <FormComponents.Form
        onSubmit={onSubmit}
        text="상품 등록"
        isLoading={isPending}
      >
        <div id="product" className="flex-1 p-4">
          <h3 className="text-lg font-bold mb-4">상품 정보</h3>
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
        </div>

        <div id="productOption" className="flex-1 p-4">
          <h3 className="text-lg font-bold mb-4">옵션 정보</h3>
          <div className="flex flex-col gap-4">
            {addOption.map((item, index) => {
              return (
                <div key={index} className="flex gap-4">
                  <FormComponents.Item
                    label="옵션 이름"
                    fieldKey={`option-name-${index}`}
                  >
                    <FormComponents.Input maxLength={100} />
                  </FormComponents.Item>
                  <FormComponents.Item
                    label="옵션 금액"
                    fieldKey={`option-addPrice-${index}`}
                  >
                    <FormComponents.Input maxLength={100} />
                  </FormComponents.Item>
                  <FormComponents.Item
                    label="옵션 수량"
                    fieldKey={`option-stock-${index}`}
                  >
                    <FormComponents.Input maxLength={100} />
                  </FormComponents.Item>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className="w-full h-12 border rounded-md bg-green-100 mt-4"
          onClick={onClickAddOption}
        >
          <div className="flex items-center justify-center gap-2">
            <FaPlusCircle size={20} />
            <span>옵션 추가</span>
          </div>
        </button>
      </FormComponents.Form>
    </FormComponents>
  );
}
