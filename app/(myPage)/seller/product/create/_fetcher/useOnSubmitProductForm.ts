import ProductService from "@/app/_service/product/ProductService";

interface Option {
  optionName: string;
  addPrice: number;
  stock: number;
  file?: string;
}

interface ProductFormData {
  productName: string;
  description: string;
  price: string;
  categoryId: string;
  brandId: string;
  [key: string]: string; // 다른 모든 동적 키를 위한 인덱스 시그니처
}

export default function useOnSubmitProductForm() {
  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    console.log(data);
    formData.append("productName", data.productName);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("categoryId", data.categoryId);
    formData.append("brandId", data.brandId);
    const options: Option[] = parseOptions(data);
    formData.append("options", JSON.stringify(options));
    const response = await ProductService.saveProduct(formData);
    return response;
  };

  function parseOptions(data: ProductFormData): Option[] {
    const result: Option[] = [];
    Object.keys(data).forEach((key) => {
      if (!key.startsWith("option")) return;
      const index = Number(key.split("-").pop());
      result[index] = result[index] || {
        optionName: "",
        addPrice: 0,
        stock: 0,
      };
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

  return onSubmit;
}
