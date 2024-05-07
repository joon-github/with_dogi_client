"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaRegBell } from "react-icons/fa";

export default function Alert() {
  const queryClient = useQueryClient();
  const { data: alert } = useQuery({
    queryKey: ["alert"],
    queryFn: () => {
      return {
        isShow: false,
        message: "",
      };
    },
    staleTime: Infinity,
  });
  const closeAlert = () => {
    queryClient.setQueryData(["alert"], {
      isShow: false,
      message: "",
    });
  };
  return (
    <div
      className={`absolute inset-x-0 inset-y-0 z-50 flex justify-center ${
        alert?.isShow ? "" : "hidden"
      }`}
      onClick={closeAlert}
    >
      <div className="flex flex-col justify-center items-center relative border border-black rounded-lg bg-white w-auto h-[100px] top-14 p-4">
        <div className="absolute top-[-20px] bg-white">
          <FaRegBell size={36} />
        </div>
        <p>{alert?.message}</p>
      </div>
    </div>
  );
}
