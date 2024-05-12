import { useQuery } from "@tanstack/react-query";
import productQueryOptions from "./productQueryOption";
import { ProductQueryKey } from "@/app/_service/product/productQueryOption";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import ProductService, {
  BrandRequest,
} from "@/app/_service/product/ProductService";
export function useMyBrand() {
  return useQuery(productQueryOptions.myBrand());
}

export function useMyProductList(limit?: number, offset?: number) {
  return useQuery(productQueryOptions.myProductList(limit, offset));
}

export function useOnSubmitBrandForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const onSubmit = async (data: BrandRequest) => {
    const res = await ProductService.saveBrand(data);
    if (res.statusCode === 201) {
      router.back();
      queryClient.invalidateQueries({ queryKey: ProductQueryKey.myBrand() });
    }
    return res;
  };
  return onSubmit;
}

interface AddProductFormData {
  productName: string;
  description: string;
  price: string;
  categoryId: string;
  brandId: string;
  [key: string]: string; // 다른 모든 동적 키를 위한 인덱스 시그니처
}
interface AddOption {
  optionName: string;
  addPrice: number;
  stock: number;
  file?: string;
}
export function useOnSubmitProductForm() {
  const onSubmit = async (data: AddProductFormData) => {
    const formData = new FormData();

    formData.append("productName", data.productName);
    formData.append("mainImage", JSON.stringify({ file: data.mainImage }));
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("categoryId", data.categoryId);
    formData.append("brandId", data.brandId);
    formData.append("images", JSON.stringify(data.images));

    const options: AddOption[] = parseOptions(data);
    formData.append("options", JSON.stringify(options));
    const response = await ProductService.saveProduct(formData);
    return response;
  };

  function parseOptions(data: AddProductFormData): AddOption[] {
    const result: AddOption[] = [];
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

export function useCheckOwner(productId: number) {
  const { data, isError, isSuccess } = useQuery(
    productQueryOptions.checkOwner(productId)
  );
  const router = useRouter();
  if (isError) {
    router.back();
  }
  return { data, isSuccess };
}

export function useModifyProduct(productId: number) {
  const onSubmit = async (data: any) => {
    const res = await ProductService.modifyProduct(productId, data);
    return res;
  };

  return onSubmit;
}
