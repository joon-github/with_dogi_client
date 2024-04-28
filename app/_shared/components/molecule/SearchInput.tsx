import { FaSearch } from "react-icons/fa";
import { Input } from "../atom";
export default function SearchInput() {
  return (
    <div className="flex flex-1 border border-gray-500 px-2 rounded-md h-10 min-w-[350px]">
      <Input placeholder="찾고 싶은 상품을 검색해보세요!" />
      <button>
        <FaSearch size={25} />
      </button>
    </div>
  );
}
