import AuthService from "./AuthService";

const queryKeys = {
  info: () => ["myInfo"] as const,
};

const queryOptions = {
  myInfo: () => ({
    queryKey: queryKeys.info(),
    queryFn: () => AuthService.getMyInfo(),
  }),
};

export default queryOptions;
