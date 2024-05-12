"use client";
import FormComponents from "@/app/_components/block/Form";
import { useMyBrand } from "@/app/_service/product/useProductService";
import Options from "./Options";
import ProductImages from "./ProductImages";
import { Direction } from "@/app/_components/block/Form/Form";
import { UseMutationResult } from "@tanstack/react-query";
import { required } from "@/app/_utils/validations";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { useState } from "react";
import ImageUpload from "@/app/_components/block/ImageUpload";

interface Props {
  mutation: UseMutationResult<any, Error, void, unknown>;
  sunmitButtonText?: string;
  use?: string[];
  direction?: Direction;
  defaultValues?: any;
}

export default function ProductForm({
  sunmitButtonText,
  use = [
    "productName",
    "description",
    "price",
    "brand",
    "category",
    "mainImage",
    "option",
    "productImages",
  ],
  direction,
  mutation,
  defaultValues = false,
}: Props) {
  const { mutate: onSubmit, isPending } = mutation;
  const { data: categories } = useCategory("product");
  const { data: brandData } = useMyBrand();
  const [mainImage, setMainImage] = useState<string>("");
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
        onSubmit={onSubmit}
        text={sunmitButtonText}
        isLoading={isPending}
        direction={direction}
      >
        {use.includes("productName") ? (
          <FormComponents.Item
            label="상품 이름"
            fieldKey="productName"
            validation={required("상품 이름를 입력해 주세요.")}
          >
            <FormComponents.Input
              name="productName"
              maxLength={100}
              defaultValue={defaultValues?.productName}
            />
          </FormComponents.Item>
        ) : null}

        {use.includes("description") ? (
          <FormComponents.Item
            label="상품 설명"
            fieldKey="description"
            validation={required("상품 설명을 입력해 주세요.")}
          >
            <FormComponents.Input
              type="textarea"
              maxLength={15}
              defaultValue={defaultValues.description}
            />
          </FormComponents.Item>
        ) : null}

        {use.includes("price") ? (
          <FormComponents.Item
            label="기본 금액"
            fieldKey="price"
            validation={required("금액를 입력해 주세요.")}
          >
            <FormComponents.Input
              type="number"
              maxLength={15}
              defaultValue={defaultValues.price}
            />
          </FormComponents.Item>
        ) : null}

        {use.includes("category") ? (
          <FormComponents.Item
            label="카테고리"
            fieldKey="categoryId"
            className="flex-1"
            validation={required("카테고리를 선택해 주세요.")}
          >
            <FormComponents.Selects
              defaultValue={defaultValues.categoryId}
              fieldKey="categoryId"
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
        ) : null}
        {use.includes("brand") ? (
          <FormComponents.Item
            label="브랜드"
            fieldKey="brandId"
            className="flex-1"
            validation={required("브랜드를 선택해 주세요.")}
          >
            <FormComponents.Selects
              defaultValue={defaultValues.brandId}
              fieldKey="brandId"
              ariaLabel="브랜드"
              data={seleteDataSetting(
                brandData?.data,
                "brandId",
                "brandId",
                "brandName"
              )}
            />
          </FormComponents.Item>
        ) : null}
        {use.includes("mainImage") ? (
          <FormComponents.Item
            label="대표 이미지"
            fieldKey={`mainImage`}
            value={mainImage}
            validation={required("대표 이미지를 등록해주세요.")}
          >
            <FormComponents.Input className="hidden" />
            <ImageUpload
              setImages={setMainImage}
              defaultValues={defaultValues.mainImageUrl}
            />
          </FormComponents.Item>
        ) : null}

        {use.includes("productImages") ? (
          <ProductImages defaultValue={defaultValues} />
        ) : null}
        {use.includes("option") ? (
          <Options defaultValue={defaultValues} />
        ) : null}
      </FormComponents.Form>
    </FormComponents>
  );
}
