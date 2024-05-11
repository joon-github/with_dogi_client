import Service from "../Service";
import { Brand, Product } from "./product.entity";

export interface BrandRequest {
  brandName: string;
}

export interface GetProductQuery {
  offset: number;
  limit: number;
  productCode?: string;
  categoryId?: number;
  userId?: number;
}

class ProductService extends Service {
  getMyBrand() {
    return this.http.get<Brand[]>(`/product/brand/my`);
  }

  saveBrand(data: BrandRequest) {
    return this.http.post<BrandRequest, null>(`/product/brand`, data);
  }

  getProductList(query: GetProductQuery) {
    let queryString = "";
    Object.entries(query).forEach(([key, value]) => {
      if (value) {
        queryString += `${key}=${value}&`;
      }
    });
    return this.http.get<Product[]>(`/product?${queryString}`);
  }

  getMyProductList(limit?: number, offset?: number) {
    return this.http.get<Product[]>(
      `/product/my?limit=${limit}&offset=${offset}`
    );
  }

  saveProduct(formData: FormData) {
    return this.http.post<any, null>(`/product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  checkOwner(productId: number) {
    return this.http.get<Product>(`/product/my/${productId}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
