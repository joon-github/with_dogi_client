"use client";
import UserInfoForm from "@/app/_components/UserInfoForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import { useMyInfo } from "@/app/_service/auth/useAuthService";
import useUserInfoModify from "./_fetcher/useUserInfoModify";
import { Direction } from "@/app/_components/block/Form/Form";
import ProfileImageEditor from "./_components/ProfileImageEditor";

export default function UserModify() {
  const { data: myInfo, isSuccess } = useMyInfo();
  const submit = useUserInfoModify();
  const mutation = useLoadingMutation(submit);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">회원정보 수정</h1>
      <div className="border-t border-slate-400 w-full">
        <ProfileImageEditor photoUrl={myInfo?.data?.profilePhoto} />
        <UserInfoForm
          isLoaded={isSuccess}
          mutation={mutation}
          direction={Direction.ROW}
          submitButtonLabel="비밀번호 변경"
          use={["password"]}
        />
        <UserInfoForm
          isLoaded={isSuccess}
          mutation={mutation}
          direction={Direction.ROW}
          submitButtonLabel="이름 변경"
          use={["name"]}
          defaultValues={{
            name: myInfo?.data?.name,
          }}
        />

        <UserInfoForm
          isLoaded={isSuccess}
          mutation={mutation}
          direction={Direction.ROW}
          submitButtonLabel="연락처 변경"
          use={["phone"]}
          defaultValues={{
            phone: myInfo?.data?.phone,
          }}
        />
        <UserInfoForm
          isLoaded={isSuccess}
          mutation={mutation}
          direction={Direction.ROW}
          submitButtonLabel="주소 변경"
          use={["address"]}
          defaultValues={{
            zonecode: myInfo?.data?.address.split("/")[0] || "",
            address: myInfo?.data?.address.split("/")[1] || "",
            detail: myInfo?.data?.address.split("/")[2] || "",
          }}
        />
      </div>
    </main>
  );
}
