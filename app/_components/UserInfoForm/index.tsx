import { LuUser2, LuLock, LuPhone, LuPenLine, LuHome } from "react-icons/lu";
import {
  addressValidation,
  emailValidation,
  nameValidation,
  passwordConfirmValidation,
  phoneValidation,
  signupPasswordValidation,
} from "@/app/_utils/validations";
import FormComponents from "@/app/_components/block/Form";
import AddressSearch from "@/app/_components/block/AddressSearch";
import { UseMutationResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Skeleton } from "@/app/_components/atom";

interface Address {
  address: string;
  zonecode: string;
}
interface Porps {
  mutation: UseMutationResult<any, Error, void, unknown>;
  submitButtonLabel: string;
  defaultValues?: any;
  excepts?: string[];
  isLoaded?: boolean;
  children?: React.ReactNode;
}
export default function UserInfoForm({
  mutation,
  submitButtonLabel,
  defaultValues = false,
  excepts = [],
  isLoaded = false,
  children,
}: Porps) {
  const { mutate: onSubmit, isSuccess } = mutation;
  const [address, setAddress] = useState<Address>({
    address: defaultValues?.address || "",
    zonecode: defaultValues?.zonecode || "",
  });
  const [addressDetail, setAddressDetail] = useState(
    defaultValues?.detail || ""
  );
  useEffect(() => {
    if (defaultValues) {
      setAddress({
        address: defaultValues?.address,
        zonecode: defaultValues?.zonecode,
      });
      setAddressDetail(defaultValues?.detail);
    }
  }, [defaultValues]);
  return (
    <>
      <FormComponents>
        <FormComponents.Form onSubmit={onSubmit}>
          {excepts.includes("email") ? null : (
            <FormComponents.Item
              label="아이디"
              icon={<LuUser2 size={22} />}
              fieldKey="email"
              validation={emailValidation}
            >
              {!isLoaded ? (
                <Skeleton claaName="w-full" isLoaded={isLoaded} />
              ) : (
                <FormComponents.Input
                  maxLength={100}
                  defaultValue={defaultValues?.email}
                />
              )}
            </FormComponents.Item>
          )}
          {excepts.includes("password") ? null : (
            <FormComponents.Item
              label="비밀번호"
              fieldKey="password"
              icon={<LuLock size={22} />}
              validation={signupPasswordValidation}
            >
              {!isLoaded ? (
                <Skeleton claaName="w-full" isLoaded={isLoaded} />
              ) : (
                <FormComponents.Input type="password" maxLength={100} />
              )}
            </FormComponents.Item>
          )}
          {excepts.includes("passwordConfirm") ? null : (
            <FormComponents.Item
              label="비밀번호 확인"
              fieldKey="passwordConfirm"
              icon={<LuLock size={22} />}
              watchField="password"
              validation={passwordConfirmValidation}
            >
              {!isLoaded ? (
                <Skeleton claaName="w-full" isLoaded={isLoaded} />
              ) : (
                <FormComponents.Input type="password" maxLength={100} />
              )}
            </FormComponents.Item>
          )}
          {excepts.includes("name") ? null : (
            <FormComponents.Item
              label="이름"
              icon={<LuPenLine size={22} />}
              fieldKey="name"
              validation={nameValidation}
            >
              {!isLoaded ? (
                <Skeleton claaName="w-full" isLoaded={isLoaded} />
              ) : (
                <FormComponents.Input
                  maxLength={30}
                  defaultValue={defaultValues?.name}
                />
              )}
            </FormComponents.Item>
          )}
          {excepts.includes("phone") ? null : (
            <FormComponents.Item
              label="연락처"
              icon={<LuPhone size={22} />}
              fieldKey="phone"
              validation={phoneValidation}
            >
              {!isLoaded ? (
                <Skeleton claaName="w-full" isLoaded={isLoaded} />
              ) : (
                <FormComponents.Input
                  type="number"
                  maxLength={15}
                  defaultValue={defaultValues?.phone}
                />
              )}
            </FormComponents.Item>
          )}

          {excepts.includes("address") ? null : (
            <FormComponents.Item
              label="주소"
              icon={<LuHome size={22} />}
              fieldKey="address"
              validation={addressValidation}
              value={
                addressDetail === "" || address.address === ""
                  ? ""
                  : `${address.zonecode}/${address.address}/${addressDetail}`
              }
            >
              <div className="px-4 pb-2 w-full">
                <div className="w-full flex items-center">
                  <FormComponents.Input
                    defaultValue={address.zonecode}
                    placeholder="우편번호"
                    hidden
                  />
                  {!isLoaded ? (
                    <Skeleton claaName="w-full" isLoaded={isLoaded} />
                  ) : (
                    <>
                      <FormComponents.Input
                        defaultValue={address.zonecode}
                        placeholder="우편번호"
                        disabled
                      />
                      <AddressSearch setAddress={setAddress} />
                    </>
                  )}
                </div>
                <div className="flex flex-col">
                  {!isLoaded ? (
                    <Skeleton claaName="w-full" isLoaded={isLoaded} />
                  ) : (
                    <FormComponents.Input
                      defaultValue={address.address}
                      placeholder="주소"
                      disabled
                    />
                  )}
                  {!isLoaded ? (
                    <Skeleton claaName="w-full" isLoaded={isLoaded} />
                  ) : (
                    <FormComponents.Input
                      placeholder="상세주소"
                      defaultValue={addressDetail}
                      onChange={(e) => setAddressDetail(e.target.value)}
                      maxLength={100}
                    />
                  )}
                </div>
              </div>
            </FormComponents.Item>
          )}
          {children}
          <FormComponents.SubmitButton
            text={submitButtonLabel}
            isLoading={isSuccess}
          />
        </FormComponents.Form>
      </FormComponents>
    </>
  );
}
