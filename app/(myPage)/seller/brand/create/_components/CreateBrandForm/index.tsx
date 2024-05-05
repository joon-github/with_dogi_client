"use client";
import FormComponents from "@/app/_components/block/Form";
import { MdDriveFileRenameOutline } from "react-icons/md";
import useOnSubmitBrandForm from "../../_fetcher/useOnSubmitBrandForm";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";

export default function CrateBrandForm() {
  const submitBrandForm = useOnSubmitBrandForm();
  const { mutate: onSubmit, isPending } = useLoadingMutation(submitBrandForm);
  return (
    <FormComponents>
      <FormComponents.Form
        onSubmit={onSubmit}
        text="브랜드 등록"
        isLoading={isPending}
      >
        <FormComponents.Item
          label="브랜드 이름"
          fieldKey="brandName"
          icon={<MdDriveFileRenameOutline size={22} />}
        >
          <FormComponents.Input maxLength={100} />
        </FormComponents.Item>
      </FormComponents.Form>
    </FormComponents>
  );
}
