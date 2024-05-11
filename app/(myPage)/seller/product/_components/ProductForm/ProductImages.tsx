"use client";
import FormComponents from "@/app/_components/block/Form";
import ImageRemove from "@/app/_components/block/ImageRemove";
import useCheckImageFileExtension from "@/app/_utils/checkImageFileExtension";
import { required } from "@/app/_utils/validations";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

interface FileData {
  id?: number;
  imageName: string;
  file: string;
}

export default function ProductImages({
  defaultValue,
}: {
  defaultValue?: any;
}) {
  const checkFileExtension = useCheckImageFileExtension();
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
  return (
    <div>
      <div id="productImage" className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">상품 설명 이미지</h3>
          <label className="cursor-pointer w-fit h-12 border rounded-md bg-green-100 flex items-center justify-center gap-2 px-4">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
            <FaPlusCircle size={20} />
            <span>이미지 추가</span>
          </label>
        </div>
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
                    <ImageRemove
                      deleteImage={() => {
                        setProductImages(
                          productImages.filter(
                            (image: FileData) => image.id !== item.id
                          )
                        );
                      }}
                      imagePreviewUrl={item.file}
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
      </div>
    </div>
  );
}
