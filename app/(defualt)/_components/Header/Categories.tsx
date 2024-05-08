"use client";
import { Skeleton } from "@/app/_components/atom";
import { useCategory } from "@/app/_service/category/useCategoryService";
import { Link } from "@/app/_components/atom"

export default function Categories() {
  const { data: categories, isSuccess } = useCategory("product");
  return (
    <Skeleton isLoaded={isSuccess} className="w-full h-[42px]">
      <ul className="flex flex-wrap items-center gap-4 justify-around min-w-[1000px] border-y border-slate-400 py-2">
        {categories?.data?.map((category) => (
          <li
            key={category.categoryId}
            className="flex flex-col items-center relative font-bold cursor-pointer group"
          >
            <Link href={`#`}>{category.categoryName}</Link>
            <div className="absolute top-full bg-white shadow-lg rounded-lg border p-2 group-hover:block hidden">
              {category.children &&
                category.children.length > 0 &&
                category.children.map((child) => (
                  <Link href={`#`} key={child.categoryId}>
                    <div className="min-w-[100px] w-fit py-2 text-center">
                      {child.categoryName}
                    </div>
                  </Link>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </Skeleton>
  );
}
