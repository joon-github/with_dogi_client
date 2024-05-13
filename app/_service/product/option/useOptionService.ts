import OptionService from "./OptionService";

interface Option {
  optionId?: number;
  optionName: string;
  addPrice: number;
  stock: number;
  file?: string;
  state?: boolean;
}
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
    if (key.includes("state") && data[key]) {
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
export function useUpsertOption() {
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(parseOptions(data));
    // return OptionService.upsertOption(data);
  };
  return onSubmit;
}
