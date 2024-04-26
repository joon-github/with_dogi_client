export const emailValidation = {
  required: "계정을 입력해 주세요.",
  pattern: {
    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    message: "계정을 정확하게 입력해 주세요.",
  },
};

export const signupPasswordValidation = {
  required: "비밀번호를 입력해 주세요.", // 필수 입력
  minLength: {
    value: 8,
    message: "비밀번호는 최소 8글자 이상이어야 합니다.", // 최소 길이
  },
  validate: {
    hasSpecialChar: (value: string) =>
      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
      "비밀번호에는 특수문자가 최소 1개 이상 포함되어야 합니다.", // 특수 문자 포함
  },
};

export const loginPasswordValidation = {
  required: "비밀번호을 입력해 주세요.",
};

export const passwordConfirmValidation = (passwordWatch: any) => ({
  required: "비밀번호를 입력해 주세요.",
  validate: (value: string) =>
    value === passwordWatch || "비밀번호가 일치하지 않습니다.",
});
