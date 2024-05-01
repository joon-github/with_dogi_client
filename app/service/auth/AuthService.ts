import Service from "@/app/service/Service";
import { MyInfo } from "./myInfo/myInfo.entitiy";

class AuthService extends Service {
  getMyInfo() {
    return this.http.get<MyInfo>(`/auth/myInfo`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
