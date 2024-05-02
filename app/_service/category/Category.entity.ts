export interface Category {
  categoryId: number;
  categoryName: string;
  children?: Category[];
}
