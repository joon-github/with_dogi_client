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

  checkOwner: (productId: number) => ({
    queryKey: ["checkOwner", productId],
    queryFn: () => ProductService.checkOwner(productId),
  }),
};

export default productQueryOptions;
