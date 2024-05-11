"use client";
import { Image } from "@nextui-org/react";
import { BsTrash3 } from "react-icons/bs";
interface Props {
  deleteImage: any;
  imagePreviewUrl: string;
}
export default function ImageRemove({ deleteImage, imagePreviewUrl }: Props) {
  return (
    <div className="relative">
      <div
        onClick={deleteImage}
        className="flex justify-center items-center opacity-0 hover:opacity-50 cursor-pointer z-50 absolute w-full h-full hover:bg-[#292929]"
      >
        <BsTrash3 size={40} color="#ffffff" />
      </div>
      <Image width={100} height={100} src={imagePreviewUrl} alt="이미지" />
    </div>
  );
}
