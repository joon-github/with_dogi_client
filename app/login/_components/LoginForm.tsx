"use client";
import useLoadingMutation from "@/app/_shared/hooks/useLoadingMutation";
import FormComponents from "@/app/_shared/components/Form";
import { LuUser2, LuLock } from "react-icons/lu";
import useOnSubmitLoginForm from "../_fetcher/useOnSubmitLoginForm";
import {
  emailValidation,
  loginPasswordValidation,
} from "@/app/_shared/utils/validations";
export default function LoginForm() {
  const submitLoginForm = useOnSubmitLoginForm();
  const { mutate: onSubmit, isSuccess } = useLoadingMutation(submitLoginForm);
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
          validation={loginPasswordValidation}
        >
          <FormComponents.Input type="password" />
        </FormComponents.Item>
        <FormComponents.SubmitButton text="로그인" isLoading={isSuccess} />
      </FormComponents.Form>
    </FormComponents>
  );
}
