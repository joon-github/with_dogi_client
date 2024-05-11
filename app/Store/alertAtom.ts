import { atom } from "recoil";
import { AlertStatus } from "../_components/block/Alert";

interface AlertState {
  isShow: boolean;
  message: string;
  status: AlertStatus | "";
}

export const alertState = atom<AlertState>({
  key: "alertState",
  default: {
    isShow: false,
    message: "",
    status: "",
  },
});
