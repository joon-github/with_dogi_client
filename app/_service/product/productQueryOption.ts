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

  myProductList: (limit?: number, offset?: number) => ({
    queryKey: [ProductQueryKey.myBrand(), limit, offset],
    queryFn: () => ProductService.getMyProductList(limit, offset),
  }),

  myProduct: (productId: number) => ({
    queryKey: ["myProduct", productId],
    queryFn: () => ProductService.myProduct(productId),
  }),
};

export default productQueryOptions;
