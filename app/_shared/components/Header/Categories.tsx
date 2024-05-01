"use client";
import { Category } from "@/service/category/Category.entity";
import { useCategory } from "@/service/category/useCategoryService";
export default function Categories() {
  const { data: categoriesRes } = useCategory("product");
  return (
    <ul>
      {categoriesRes?.map((category: Category) => (
        <li key={category.categoryId}>{category.categoryName}</li>
      ))}
    </ul>
  );
}
