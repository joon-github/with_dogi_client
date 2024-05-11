"user client";
import { Image } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { TbPencilMinus } from "react-icons/tb";
import useProfileUpdate from "../../_fetcher/useProfileUpdate";
import useCheckImageFileExtension from "@/app/_utils/checkImageFileExtension";

export default function ProfileImageEditor({
  photoUrl,
}: {
  photoUrl: string | undefined;
}) {
  const checkFileExtension = useCheckImageFileExtension();
  const submit = useProfileUpdate();
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = await checkFileExtension(
      e.target.files ? e.target.files[0] : null
    );
    if (image) {
      submit(image);
    }
  };

  return (
    <div className="relative w-fit my-4">
      <div className="border border-slate-400 rounded-full overflow-hidden w-[200px] h-[200px] p-4">
        <Image
          width={200}
          height={200}
          alt="profile image"
          src={photoUrl || ""}
        />
      </div>
      <label className="bg-gray-300 rounded-full p-2 absolute bottom-[5px] right-[5px] z-10 cursor-pointer">
        <TbPencilMinus size={30} color="#ffffff" />
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
    </div>
  );
}
