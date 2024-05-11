"use client";
import { alertState } from "@/app/Store/alertAtom";
import { FaRegBell } from "react-icons/fa";
import { useRecoilState } from "recoil";
export enum AlertStatus {
  Success = "success",
  Error = "error",
}

export default function Alert() {
  const [alert, setAlert] = useRecoilState(alertState);

  const closeAlert = () => {
    setAlert({
      isShow: false,
      message: "",
      status: AlertStatus.Success,
    });
  };
  const borderColor = {
    [AlertStatus.Success]: "border-lime-600",
    [AlertStatus.Error]: "border-orange-600",
  };
  const iconColor = {
    [AlertStatus.Success]: "#5cb85c",
    [AlertStatus.Error]: "#d9534f",
  };
  const textColor = {
    [AlertStatus.Success]: "text-lime-600",
    [AlertStatus.Error]: "text-orange-600",
  };
  return (
    <div
      className={`absolute inset-x-0 inset-y-0 z-[999999] flex justify-center ${
        alert?.isShow ? "" : "hidden"
      }`}
      onClick={closeAlert}
    >
      <div
        className={`flex border-2 flex-col justify-center items-center relative border border-black rounded-lg bg-white w-auto h-[100px] top-14 p-4 ${
          borderColor[alert?.status || AlertStatus.Success]
        }`}
      >
        <div className="absolute top-[-20px] bg-white">
          <FaRegBell
            className="bellShake"
            size={36}
            color={iconColor[alert?.status || AlertStatus.Success]}
          />
        </div>
        <p
          className={`text-lg ${
            textColor[alert?.status || AlertStatus.Success]
          }`}
        >
          {alert?.message}
        </p>
      </div>
    </div>
  );
}
