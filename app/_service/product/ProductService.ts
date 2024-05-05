import Service from "../Service";
import { Brand } from "./product.entity";

export interface BrandRequest {
  brandName: string;
}

class ProductService extends Service {
  getMyBrand() {
    return this.http.get<Brand>(`/product/brand/my`);
  }

  saveBrand(data: BrandRequest) {
    return this.http.post<Brand, null>(`/product/brand`, data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
