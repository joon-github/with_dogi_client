import Service from "@/app/_service/Service";
import { MyInfo } from "./auth.entitiy";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  address: string;
}

export interface ProfileUpdate {}
class AuthService extends Service {
  getMyInfo() {
    return this.http.get<MyInfo>(`/auth/myInfo`);
  }

  getLoginStatus() {
    return this.http.get<boolean>(`/auth/loginCheck`);
  }

  login(data: LoginRequest) {
    return this.http.post<LoginRequest, null>("/auth/login", {
      email: data.email,
      password: data.password,
    });
  }

  signup(data: SignupRequest) {
    return this.http.post<SignupRequest, null>("/auth/signup", {
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      name: data.name,
      phone: data.phone,
      address: data.address,
    });
  }

  modify(data: SignupRequest) {
    return this.http.patch<SignupRequest, null>("/auth/member", {
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      name: data.name,
      phone: data.phone,
      address: data.address,
    });
  }

  profileUpdate(formData: FormData) {
    return this.http.patch<ProfileUpdate, null>("/auth/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
