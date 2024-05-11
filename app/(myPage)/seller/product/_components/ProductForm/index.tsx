"use client";
import FormComponents from "@/app/_components/block/Form";
import { useOnSubmitProductForm } from "@/app/_service/product/useProductService";
import useLoadingMutation from "@/app/_hooks/useLoadingMutation";
import Options from "./Options";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import { Direction } from "@/app/_components/block/Form/Form";

type Uses = "productInfo" | "option" | "productImages";
interface Props {
  sunmitButtonText?: string;
  use?: Uses[];
  direction?: Direction;
  defaultValues?: any;
}

export default function ProductForm({
  sunmitButtonText,
  use = ["productInfo", "option", "productImages"],
  direction,
  defaultValues = false,
}: Props) {
  const onSubmitProductForm = useOnSubmitProductForm();
  const { mutate: onSubmit, isPending } =
    useLoadingMutation(onSubmitProductForm);

  return (
    <FormComponents>
      <FormComponents.Form
        onSubmit={onSubmit}
        text={sunmitButtonText}
        isLoading={isPending}
        direction={direction}
      >
        {use.includes("productInfo") ? (
          <ProductInfo defaultValue={defaultValues} />
        ) : null}
        {use.includes("productImages") ? (
          <ProductImages defaultValue={defaultValues} />
        ) : null}
        {use.includes("option") ? (
          <Options defaultValue={defaultValues} />
        ) : null}
      </FormComponents.Form>
    </FormComponents>
  );
}
