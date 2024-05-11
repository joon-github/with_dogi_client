import { Image } from "@nextui-org/react";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import ImageRemove from "../ImageRemove";
interface Props {
  setImages: any;
}

export default function ImageUpload({ setImages }: Props) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>("");
  const handleImageChange = (e: any) => {
    e.preventDefault();
    // 파일 리더 인스턴스 생성
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => {
        setImages(reader.result);
        setImagePreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const deleteImage = (e: any) => {
    e.preventDefault();
    setImages("");
    setImagePreviewUrl("");
  };
  return (
    <label className="w-full cursor-pointer flex items-center">
      <input type="file" className="hidden" onChange={handleImageChange} />
      {imagePreviewUrl ? (
        <div className="flex items-center justify-center w-full h-[200px] overflow-scroll">
          <ImageRemove
            deleteImage={deleteImage}
            imagePreviewUrl={imagePreviewUrl}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2 text-cyan-700 text-nowrap">
          <span>이미지 추가</span>
          <CiImageOn size={40} />
        </div>
      )}
    </label>
  );
}
