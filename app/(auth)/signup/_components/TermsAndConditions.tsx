"use client";
import { useState } from "react";
import AgreementCheckbox from "@/app/_shared/components/molecule/AgreementCheckbox";
import ModalTriggerButton from "../../../_shared/components/molecule/ModalTriggerButton";
import { LuChevronRight } from "react-icons/lu";
import Agreement from "./TermsAndConditions/Agreement";
import Privacy from "./TermsAndConditions/Privacy";
import ThirdPartyConsent from "./TermsAndConditions/ThirdPartyConsent";
import { CheckboxGroup } from "@nextui-org/react";
export default function TermsAndConditions() {
  const [values, setValues] = useState<string[]>([]);
  const [isAgeOver14, setIsAgeOver14] = useState(false);
  const [isAgreePrivacy, setIsAgreePrivacy] = useState(false);
  const [isAgreeThirdParty, setIsAgreeThirdParty] = useState(false);

  const onChangeAllCheck = (checked: boolean) => {
    setValues(
      checked
        ? ["isAgeOver14", "isAgreePrivacy", "isAgreeThirdParty", "thirdparty"]
        : []
    );
  };
  return (
    <label className="flex flex-col gap-2 mb-4">
      <AgreementCheckbox
        label={<strong>모두 확인하였으며 동의합니다.</strong>}
        onChange={onChangeAllCheck}
      />
      <CheckboxGroup
        errorMessage="필수 항목에 모두 동의해주세요"
        description="Test"
        value={values}
      >
        <p className="text-sm text-gray-500">
          전체 동의에는 필수 및 선택 정보에 대한 동의가 포함되어 있으며,
          개별적으로 동의를 선택 하실 수 있습니다. 선택 항목에 대한 동의를
          거부하시는 경우에도 서비스 이용이 가능합니다.
        </p>
        <div className="flex flex-col gap-2">
          <AgreementCheckbox
            label="[필수] 만 14세 이상입니다."
            value="isAgeOver14"
            onChange={(checked) => setIsAgeOver14(checked)}
          />
          <AgreementCheckbox
            label="[필수] with dogi 이용약관 동의"
            value="agreement"
            onChange={(checked) => setIsAgeOver14(checked)}
          >
            <ModalTriggerButton
              title="with dogi 약관 동의"
              contents={<Agreement />}
            >
              <LuChevronRight />
            </ModalTriggerButton>
          </AgreementCheckbox>
          <AgreementCheckbox
            label="[필수] 개인정보 수집 및 이용 동의"
            value="privacy"
            onChange={(checked) => setIsAgreePrivacy(checked)}
          >
            <ModalTriggerButton
              title="개인정보 수집 및 이용 동의"
              contents={<Privacy />}
            >
              <LuChevronRight />
            </ModalTriggerButton>
          </AgreementCheckbox>
          <AgreementCheckbox
            label="[필수] 개인정보 제3자 제공 동의"
            value="thirdparty"
            onChange={(checked) => setIsAgreeThirdParty(checked)}
          >
            <ModalTriggerButton
              title="개인정보 제3자 제공 동의"
              contents={<ThirdPartyConsent />}
            >
              <LuChevronRight />
            </ModalTriggerButton>
          </AgreementCheckbox>
        </div>
      </CheckboxGroup>
    </label>
  );
}
