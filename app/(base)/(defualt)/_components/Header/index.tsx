import Logo from "../../../../_components/molecule/Logo";
import SearchInput from "../../../../_components/molecule/SearchInput";
import UserNavigation from "./UserNavigation";
import Categories from "./Categories";
import NavLinks from "./NavLinks";
export default function Header() {
  return (
    <header className="flex flex-col gap-2 py-4">
      <div className="flex items-center gap-10 pl-6">
        <div className="min-w-[200px]">
          <Logo href="/products" width={200} />
        </div>
        <NavLinks />
        <div className="flex flex-1 items-center gap-10">
          <SearchInput />
          <UserNavigation />
        </div>
      </div>
      <Categories />
    </header>
  );
}
