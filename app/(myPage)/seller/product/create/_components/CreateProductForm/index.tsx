"use client";
import FormComponents from "@/app/_components/block/Form";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { useMyBrand } from "@/app/_service/product/useProductService";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import useOnSubmitProductForm from "../../_fetcher/useOnSubmitProductForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import ImageUpload from "@/app/_components/block/ImageUpload";
import { required } from "@/app/_utils/validations";
import { Image } from "@nextui-org/react";
import checkFileExtension from "@/app/_utils/checkImageFileExtension";

interface FileData {
  id?: number;
  imageName: string;
  file: string;
}
interface StringMap {
  [key: string]: string;
}
export default function CrateProductForm() {
  const { data: categories } = useCategory("product");
  const { data: brandData } = useMyBrand();
  const [addOption, setAddOption] = useState<StringMap[]>([{}]);
  const [mainImage, setMainImage] = useState<string>("");
  const [optionImages, setOptionImages] = useState<StringMap>({});
  const [productImages, setProductImages] = useState<FileData[]>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // 파일 리더 인스턴스 생성
    const image = await checkFileExtension(
      e.target.files ? e.target.files[0] : null
    );
    if (image) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setProductImages((prev: FileData[] | any) => {
          return [
            ...prev,
            {
              id: Math.random(),
              imageName: image.name,
              file: reader.result,
            },
          ];
        });
      };
      reader.readAsDataURL(image);
    }
  };

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
    setAddOption([...addOption, {}]);
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

        <div id="productImage" className="flex-1 p-4">
          <h3 className="text-lg font-bold mb-4">상품 설명 이미지</h3>
          <FormComponents.Item
            label="상품 설명 이미지"
            fieldKey={`images`}
            validation={required("상품 설명 이미지를 추가해 주세요.")}
            value={productImages}
          >
            {productImages.length > 0 ? (
              <div className="flex gap-4">
                {productImages.map((item: FileData) => (
                  <div key={item.id} className="flex flex-col gap-2 w-[120px]">
                    <div className="h-[120px] overflow-scroll">
                      <Image
                        src={item.file}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="text-sm truncate w-[120px]">
                      {item.imageName}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>상품 설명 이미지를 추가해주세요.</div>
            )}
          </FormComponents.Item>
          <label className="cursor-pointer w-full h-12 border rounded-md bg-green-100 mt-4 flex items-center justify-center gap-2">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
            <FaPlusCircle size={20} />
            <span>이미지 추가</span>
          </label>
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
                    validation={required("옵션 이름을 입력해 주세요.")}
                  >
                    <FormComponents.Input maxLength={100} />
                  </FormComponents.Item>
                  <FormComponents.Item
                    label="옵션 금액"
                    fieldKey={`option-addPrice-${index}`}
                    validation={required("옵션 금액을 입력해 주세요.")}
                  >
                    <FormComponents.Input type="number" maxLength={100} />
                  </FormComponents.Item>
                  <FormComponents.Item
                    label="옵션 수량"
                    fieldKey={`option-stock-${index}`}
                    validation={required("옵션 수량을 입력해 주세요.")}
                  >
                    <FormComponents.Input type="number" maxLength={100} />
                  </FormComponents.Item>
                  <FormComponents.Item
                    label="옵션 이미지"
                    fieldKey={`option-image-${index}`}
                    value={optionImages[index]}
                  >
                    <FormComponents.Input className="hidden" />
                    <ImageUpload
                      setImages={(image: any) => {
                        setOptionImages((prev: any) => {
                          return { ...prev, [index]: image };
                        });
                      }}
                    />
                  </FormComponents.Item>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
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
