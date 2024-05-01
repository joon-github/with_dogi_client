import { CiShoppingCart } from "react-icons/ci";
import Logo from "../molecule/Logo";
import SearchInput from "../molecule/SearchInput";
import Link from "next/link";
import IconText from "../molecule/IconText";
import LoginStatus from "./LoginStatus";
import { SlUser } from "react-icons/sl";
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
          <div className="flex gap-4">
            <IconText icon={<CiShoppingCart size={40} />}>
              <Link href="/cart">
                <div>장바구니</div>
              </Link>
            </IconText>
            <IconText icon={<SlUser size={28} />}>
              <LoginStatus />
            </IconText>
          </div>
        </div>
      </div>
      <Categories />
    </header>
  );
}
