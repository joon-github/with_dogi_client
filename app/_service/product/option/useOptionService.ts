import OptionService from "./OptionService";
import { Option } from "../product.entity";
import { useQueryClient } from "@tanstack/react-query";
import { ProductQueryKey } from "../productQueryOption";

interface KeyValue {
  [key: string]: string;
}
function parseOptions(data: KeyValue): Option[] {
  const result: Option[] = [];
  Object.keys(data).forEach((key) => {
    if (!key.startsWith("option")) return;
    const index = Number(key.split("-").pop());
    result[index] = result[index] || {
      optionName: "",
      addPrice: 0,
      stock: 0,
    };
    if (key.includes("state") && !data[key]) {
      result[index].optionId = index;
    }

    if (key.includes("name")) {
      result[index].optionName = data[key];
    } else if (key.includes("addPrice")) {
      result[index].addPrice = data[key] === "" ? 0 : parseFloat(data[key]);
    } else if (key.includes("stock")) {
      result[index].stock = data[key] === "" ? 0 : parseInt(data[key], 10);
    } else if (key.includes("image")) {
      result[index].file = data[key];
    }
  });
  return result.filter((option) => option.optionName);
}
export function useUpsertOption(productId: number) {
  const queryClient = useQueryClient();
  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("options", JSON.stringify(parseOptions(data)));
    const res = await OptionService.upsertOption(formData, productId);
    if (res.statusCode === 200) {
      queryClient.invalidateQueries({
        queryKey: ProductQueryKey.myProduct(productId),
      });
    }
    return res;
  };
  return onSubmit;
}
