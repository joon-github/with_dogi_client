"use client";
import useLoadingMutation from "@/app/_shared/hooks/useLoadingMutation";
import FormComponents from "@/app/_shared/components/Form";
import { LuUser2, LuLock } from "react-icons/lu";
import useOnSubmitLoginForm from "../fetcher/useOnSubmitLoginForm";
export default function LoginForm() {
  const submitLoginForm = useOnSubmitLoginForm();
  const { mutate: onSubmit, isSuccess } = useLoadingMutation(submitLoginForm);

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
          label="아이디"
          icon={<LuUser2 size={22} />}
          fieldKey="email"
          validation={emailValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.Item
          label="비밀번호"
          fieldKey="password"
          icon={<LuLock size={22} />}
          validation={passwordValidation}
        >
          <FormComponents.Input type="password" />
        </FormComponents.Item>
        <FormComponents.SubmitButton isLoading={isSuccess} />
      </FormComponents.Form>
    </FormComponents>
  );
}
