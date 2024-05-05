import AuthService from "./AuthService";

export const AuthQueryKey = {
  info: () => ["myInfo"] as const,
  loginStatus: () => ["loginStatus"] as const,
};

const authQueryOptions = {
  myInfo: () => ({
    queryKey: AuthQueryKey.info(),
    queryFn: () => AuthService.getMyInfo(),
  }),
  loginStatus: () => ({
    queryKey: AuthQueryKey.loginStatus(),
    queryFn: () => AuthService.getLoginStatus(),
  }),
};

export default authQueryOptions;
