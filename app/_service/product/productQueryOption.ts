import ProductService from "./ProductService";

export const ProductQueryKey = {
  myBrand: () => ["myBrand"] as const,

  myProductList: () => ["myProductList"] as const,
};

const productQueryOptions = {
  myBrand: () => ({
    queryKey: ProductQueryKey.myBrand(),
    queryFn: () => ProductService.getMyBrand(),
  }),

  myProductList: () => ({
    queryKey: ProductQueryKey.myProductList(),
    queryFn: () => ProductService.getMyProductList(),
  }),
};

export default productQueryOptions;
