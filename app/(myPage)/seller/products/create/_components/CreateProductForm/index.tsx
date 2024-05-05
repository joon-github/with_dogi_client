"use client";
import FormComponents from "@/app/_components/block/Form";

export default function CrateProductForm() {
  return (
    <FormComponents>
      <FormComponents.Form
        onSubmit={() => {}}
        text="상품등록"
        isLoading={false}
      >
        <FormComponents.Item label="아이디" fieldKey="email">
          <FormComponents.Input maxLength={100} />
        </FormComponents.Item>
      </FormComponents.Form>
    </FormComponents>
  );
}
