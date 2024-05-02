import AuthService from "./AuthService";

const queryKeys = {
  info: () => ["myInfo"] as const,
  loginStatus: () => ["loginStatus"] as const,
};

const queryOptions = {
  myInfo: () => ({
    queryKey: queryKeys.info(),
    queryFn: () => AuthService.getMyInfo(),
  }),
  loginStatus: () => ({
    queryKey: queryKeys.loginStatus(),
    queryFn: () => AuthService.getLoginStatus(),
  }),
};

export default queryOptions;
