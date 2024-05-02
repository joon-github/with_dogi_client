"use client";
import UserInfoForm from "@/app/_components/UserInfoForm";
import useOnSubmitSignupForm from "./_fetcher/useOnSubmitSignupForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import TermsAndConditions from "./_components/TermsAndConditions";

export default function SineUp() {
  const submitSignupForm = useOnSubmitSignupForm();
  const mutation = useLoadingMutation(submitSignupForm);
  return (
    <div>
      <UserInfoForm mutation={mutation} submitButtonLabel="회원가입">
        <TermsAndConditions />
      </UserInfoForm>
    </div>
  );
}
