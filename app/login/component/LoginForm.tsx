"use client";
import FormComponents from "@/app/shared/components/Form";

export default function LoginForm() {
  const onSubmit = (data: any) => {
    console.log("data", data);
  };
  const emailValidation = {
    required: "계정을 입력해 주세요.",
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "계정을 정확하게 입력해 주세요.",
    },
  };
  const passwordValidation = {
    required: "비밀번호을 입력해 주세요.",
  };
  return (
    <FormComponents>
      <FormComponents.Form onSubmit={onSubmit}>
        <FormComponents.Item
          label="이메일"
          fieldKey="email"
          validation={emailValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.Item
          label="비밀번호"
          fieldKey="password"
          validation={passwordValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.SubmitButton />
      </FormComponents.Form>
    </FormComponents>
  );
}
