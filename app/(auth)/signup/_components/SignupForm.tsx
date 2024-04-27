"use client";
import { LuUser2, LuLock, LuPhone, LuPenLine, LuHome } from "react-icons/lu";
import {
  addressValidation,
  emailValidation,
  nameValidation,
  passwordConfirmValidation,
  phoneValidation,
  signupPasswordValidation,
} from "@/app/_shared/utils/validations";
import FormComponents from "@/app/_shared/components/molecule/Form";
import AddressSearch from "@/app/_shared/components/molecule/AddressSearch";
import { useState } from "react";
import TermsAndConditions from "./TermsAndConditions";

interface Address {
  address: string;
  zonecode: string;
}
export default function SignupForm() {
  const [address, setAddress] = useState<Address>({
    address: "",
    zonecode: "",
  });
  const [addressDetail, setAddressDetail] = useState("");
  return (
    <>
      <FormComponents>
        <FormComponents.Form
          onSubmit={(data) => {
            console.log(data);
          }}
        >
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
            validation={nameValidation}
          >
            <FormComponents.Input />
          </FormComponents.Item>
          <FormComponents.Item
            label="연락처"
            icon={<LuPhone size={22} />}
            fieldKey="phone"
            validation={phoneValidation}
          >
            <FormComponents.Input />
          </FormComponents.Item>
          <FormComponents.Item
            label="주소"
            icon={<LuHome size={22} />}
            fieldKey="address"
            validation={addressValidation}
            value={`${address.address} ${address.zonecode} ${addressDetail}`}
          >
            <div className="px-4 pb-2 w-full">
              <div className="w-full flex items-center">
                <FormComponents.Input
                  value={address.zonecode}
                  placeholder="우편번호"
                  hidden
                />
                <FormComponents.Input
                  value={address.zonecode}
                  placeholder="우편번호"
                  disabled
                />
                <AddressSearch setAddress={setAddress} />
              </div>
              <div className="flex flex-col">
                <FormComponents.Input
                  value={address.address}
                  placeholder="주소"
                  disabled
                />
                <FormComponents.Input
                  placeholder="상세주소"
                  onChange={(e) => setAddressDetail(e.target.value)}
                />
              </div>
            </div>
          </FormComponents.Item>
          <TermsAndConditions />
          <FormComponents.SubmitButton text="회원가입" />
        </FormComponents.Form>
      </FormComponents>
    </>
  );
}
