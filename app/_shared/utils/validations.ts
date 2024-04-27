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

export const nameValidation = {
  required: "이름를 입력해 주세요.",
  maxLength: {
    value: 10,
    message: "이름은 10글자 이하 이어야 합니다.",
  },
  minLength: {
    value: 2,
    message: "이름은 2글자 이상 이어야 합니다.",
  },
};

export const phoneValidation = {
  required: "연락처를 입력해 주세요.",
  pattern: {
    value: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
    message: "연락처를 정확하게 입력해 주세요.",
  },
};

export const addressValidation = {
  required: "주소를 입력해 주세요.",
};
