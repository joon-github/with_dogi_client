import Service from "../Service";
import { Brand } from "./product.entity";

export interface BrandRequest {
  brandName: string;
}

class ProductService extends Service {
  getMyBrand() {
    return this.http.get<Brand[]>(`/product/brand/my`);
  }

  saveBrand(data: BrandRequest) {
    return this.http.post<BrandRequest, null>(`/product/brand`, data);
  }

  saveProduct(formData: FormData) {
    return this.http.post<any, null>(`/product`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
