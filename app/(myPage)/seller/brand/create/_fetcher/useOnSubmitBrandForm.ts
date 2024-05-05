import ProductService, {
  BrandRequest,
} from "@/app/_service/product/ProductService";
import { ProductQueryKey } from "@/app/_service/product/productQueryOption";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function useOnSubmitBrandForm() {
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
