"use client";
import { LuUser2, LuLock, LuPhone, LuPenLine, LuHome } from "react-icons/lu";
import {
  emailValidation,
  passwordConfirmValidation,
  signupPasswordValidation,
} from "@/app/_shared/utils/validations";
import FormComponents from "@/app/_shared/components/Form";
export default function SignupForm() {
  return (
    <FormComponents>
      <FormComponents.Form onSubmit={() => {}}>
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
          validation={signupPasswordValidation}
        >
          <FormComponents.Input type="password" />
        </FormComponents.Item>
        <FormComponents.Item
          label="비밀번호 확인"
          fieldKey="passwordConfirm"
          icon={<LuLock size={22} />}
          watchField="password"
          validation={passwordConfirmValidation}
        >
          <FormComponents.Input type="password" />
        </FormComponents.Item>
        <FormComponents.Item
          label="이름"
          icon={<LuPenLine size={22} />}
          fieldKey="name"
          validation={emailValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.Item
          label="연락처"
          icon={<LuPhone size={22} />}
          fieldKey="phone"
          validation={emailValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.Item
          label="주소"
          icon={<LuHome size={22} />}
          fieldKey="address"
          validation={emailValidation}
        >
          <FormComponents.Input />
        </FormComponents.Item>
        <FormComponents.SubmitButton />
      </FormComponents.Form>
    </FormComponents>
  );
}
