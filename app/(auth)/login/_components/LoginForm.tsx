"use client";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import FormComponents from "@/app/_components/block/Form";
import { LuUser2, LuLock } from "react-icons/lu";
import {useOnSubmitLoginForm} from "@/app/_service/auth/useAuthService";
import { emailValidation, required } from "@/app/_utils/validations";
import { useLoginStatus } from "@/app/_service/auth/useAuthService";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const submitLoginForm = useOnSubmitLoginForm();
  const { mutate: onSubmit, isPending } = useLoadingMutation(submitLoginForm);
  // const { data: loginStatus } = useLoginStatus();
  // const router = useRouter();
  // useEffect(() => {
  //   if (loginStatus?.data) {
  //     router.push("/user-modify");
  //   }
  // },[loginStatus])
  return (
    <FormComponents>
      <FormComponents.Form
        onSubmit={onSubmit}
        text="로그인"
        isLoading={isPending}
      >
        <FormComponents.Item
          label="아이디"
          icon={<LuUser2 size={22} />}
          fieldKey="email"
          validation={emailValidation}
        >
          <FormComponents.Input maxLength={100} />
        </FormComponents.Item>
        <FormComponents.Item
          label="비밀번호"
          fieldKey="password"
          icon={<LuLock size={22} />}
          validation={required("비밀번호를 입력해 주세요.")}
        >
          <FormComponents.Input type="password" maxLength={100} />
        </FormComponents.Item>
      </FormComponents.Form>
    </FormComponents>
  );
}
