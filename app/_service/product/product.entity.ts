import { Category } from "../category/Category.entity";

export interface Brand {
  brandId: number;
  brandName: string;
}

export interface Option {
  optionId: number;
  optionName: string;
  addPrice: number;
  stock: number;
  imageUrl: string;
}

export interface Image {
  imageId: number;
  imageUrl: string;
}
export interface Product {
  productId: number;
  productCode: string;
  productName: string;
  price: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  brand: Brand;
  category: Category;
  options: Option[];
  images: Image[];
  mainImageUrl: string;
}
