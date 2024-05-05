import ProductService from "./ProductService";

export const ProductQueryKey = {
  myBrand: () => ["myBrand"] as const,
};

const productQueryOptions = {
  myBrand: () => ({
    queryKey: ProductQueryKey.myBrand(),
    queryFn: () => ProductService.getMyBrand(),
  }),
};

export default productQueryOptions;
