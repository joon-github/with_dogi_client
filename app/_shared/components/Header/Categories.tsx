"use client";
import { useCategory } from "@/app/service/category/useCategoryService";
import Link from "next/link";
// export default function Categories() {
//   const { data: categories } = useCategory("product");
//   return (
//     <ul className="flex flex-1 items-center gap-10 justify-around min-w-[1000px] border-y border-slate-400 py-2">
//       {categories?.map((category) => (
//         <li
//           key={category.categoryId}
//           className="flex flex-col items-center font-bold cursor-pointer group"
//         >
//           <Link href={`#`}>{category.categoryName}</Link>
//           <div className="absolute mt-[30px] bg-white shadow-lg rounded-lg border p-2 hidden group-hover:block">
//             {category.children &&
//               category.children.length > 0 &&
//               category.children.map((child) => (
//                 <div
//                   className="group relative min-w-[100px] w-fit py-2 text-center"
//                   key={child.categoryId}
//                 >
//                   {child.categoryName}
//                 </div>
//               ))}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function Categories() {
  const { data: categories } = useCategory("product");
  return (
    <ul className="flex flex-wrap items-center gap-4 justify-around min-w-[1000px] border-y border-slate-400 py-2">
      {categories?.map((category) => (
        <li
          key={category.categoryId}
          className="flex flex-col items-center relative font-bold cursor-pointer group"
        >
          <Link href={`#`}>{category.categoryName}</Link>
          <div className="absolute top-full bg-white shadow-lg rounded-lg border p-2 group-hover:block hidden transition-all ease-out duration-300">
            {category.children &&
              category.children.length > 0 &&
              category.children.map((child) => (
                <div
                  className="min-w-[100px] w-fit py-2 text-center"
                  key={child.categoryId}
                >
                  {child.categoryName}
                </div>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
