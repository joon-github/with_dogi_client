import Service from "@/app/service/Service";
import { MyInfo } from "./auth.entitiy";

interface LoginRequest {
  email: string;
  password: string;
}
class AuthService extends Service {
  getMyInfo() {
    return this.http.get<MyInfo>(`/auth/myInfo`);
  }

  getLoginStatus() {
    return this.http.get<boolean>(`/auth/loginCheck`);
  }

  login(email: string, password: string) {
    return this.http.post<LoginRequest, null>("/auth/login", {
      email,
      password,
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
