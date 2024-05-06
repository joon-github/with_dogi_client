"user client";
import { Image } from "@nextui-org/react";
import { ChangeEvent } from "react";
import { TbPencilMinus } from "react-icons/tb";
import useProfileUpdate from "../../_fetcher/useProfileUpdate";
import { baseUrl } from "@/app/_utils/baseUrl";
// import useLoadingMutation from "@/app/_hooks/useLoadingMutation";

export default function ProfileImageEditor({
  photoUrl,
}: {
  photoUrl: string | undefined;
}) {
  const submit = useProfileUpdate();
  // const { mutate: onSubmit, isSuccess } = useLoadingMutation(submit);
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const formData = new FormData();
    if (files && files.length > 0) {
      formData.append("file", files[0]);
      submit(files[0]);
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
