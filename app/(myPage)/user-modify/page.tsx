"use client";
import UserInfoForm from "@/app/_components/UserInfoForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
import useUserInfoModify from "./_fetcher/useUserInfoModify";

export default function UserModify() {
  const { data: myInfo, isSuccess } = useMyInfo();
  const submit = useUserInfoModify();
  const mutation = useLoadingMutation(submit);
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">회원정보 수정</h1>
      <div className="border-t border-slate-400 w-full">
        <UserInfoForm
          isLoaded={isSuccess}
          mutation={mutation}
          submitButtonLabel="회원정보 수정"
          excepts={["email"]}
          defaultValues={{
            zonecode: myInfo?.data?.address.split("/")[0] || "",
            address: myInfo?.data?.address.split("/")[1] || "",
            detail: myInfo?.data?.address.split("/")[2] || "",
            name: myInfo?.data?.name,
            email: myInfo?.data?.email,
            phone: myInfo?.data?.phone,
          }}
        />
      </div>
    </main>
  );
}
