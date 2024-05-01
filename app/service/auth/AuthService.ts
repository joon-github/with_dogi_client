import Service from "@/app/service/Service";
import { MyInfo } from "./auth.entitiy";
import { ResponseType } from "../ResponsType";
class AuthService extends Service {
  getMyInfo() {
    return this.http.get<ResponseType<MyInfo>>(`/auth/myInfo`);
  }

  getLoginStatus() {
    return this.http.get<ResponseType<boolean>>(`/auth/loginCheck`);
  }

  login(email: string, password: string) {
    return this.http.post<ResponseType<null>>("/auth/login", {
      email,
      password,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
