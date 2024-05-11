"use client";
import { AlertStatus } from "../_components/block/Alert";
import { useSetRecoilState } from "recoil";
import { alertState } from "../Store/alertAtom";
export default function useAlert() {
  const setAlert = useSetRecoilState(alertState);
  return {
    alert: (message: string, status: AlertStatus) => {
      setAlert({
        isShow: true,
        message,
        status,
      });
      setTimeout(() => {
        setAlert({
          isShow: false,
          message: "",
          status: "",
        });
      }, 2000);
    },
  };
}
