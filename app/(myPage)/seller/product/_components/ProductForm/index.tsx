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
}

export default function ProductForm({
  sunmitButtonText,
  use = ["productInfo", "option", "productImages"],
  direction,
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
        {use.includes("productInfo") ? <ProductInfo /> : null}
        {use.includes("productImages") ? <ProductImages /> : null}
        {use.includes("option") ? <Options /> : null}
      </FormComponents.Form>
    </FormComponents>
  );
}
