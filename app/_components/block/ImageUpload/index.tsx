import { Image } from "@nextui-org/react";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

interface Props {
  index: number;
  setImages: any;
}

export default function ImageUpload({ index, setImages }: Props) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>("");
  const handleImageChange = (e: any) => {
    e.preventDefault();

    // 파일 리더 인스턴스 생성
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("index", index);
    if (file) {
      // 파일 읽기
      // setFile(file);
      reader.onloadend = () => {
        // 읽기 완료 후 상태 업데이트
        setImages((prev: any) => {
          return { ...prev, [index]: reader.result };
        });
        setImagePreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <label className="cursor-pointer flex items-center">
      <input type="file" className="hidden" onChange={handleImageChange} />
      {imagePreviewUrl ? (
        <Image
          width={100}
          height={100}
          src={imagePreviewUrl}
          alt="옵션 이미지"
        />
      ) : (
        <div className="flex items-center gap-2 text-cyan-700">
          <span className="">옵션 이미지 추가</span>
          <CiImageOn size={40} />
        </div>
      )}
    </label>
  );
}
