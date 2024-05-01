import Logo from "../molecule/Logo";
import SearchInput from "../molecule/SearchInput";
import UserNavigation from "./UserNavigation";
import Categories from "./Categories";
export default function Header() {
  return (
    <header className="py-4 px-6">
      <div className="flex items-center gap-10">
        <div className="min-w-[200px]">
          <Logo href="/" width={200} />
        </div>
        <div className="flex flex-1 items-center gap-10">
          <SearchInput />
          <UserNavigation />
        </div>
      </div>
      <Categories />
    </header>
  );
}
