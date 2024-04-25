"use client";

import FormComponents from "@/app/shared/components/Form";
import Input from "@/app/shared/components/Input";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const emailValidation = {
    required: "계정을 입력해 주세요.",
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "계정을 정확하게 입력해 주세요.",
    },
  };
  return (
    <>
      <FormComponents>
        <FormComponents.Form onSubmit={onSubmit}>
          <FormComponents.Item
            label="이메일"
            fieldKey="email"
            validation={emailValidation}
          >
            <Input />
          </FormComponents.Item>
          <FormComponents.SubmitButton />
        </FormComponents.Form>
      </FormComponents>
    </>
  );
}
