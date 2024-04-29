import getCateory from "../../entity/category/getCategory";
import PrefetchHydration from "../PrefetchHydration/PrefetchHydration";
import HeaderView from "./HeaderView";

export default function Header() {
  return (
    <PrefetchHydration
      queryKey={["category", "product"]}
      queryFn={() => getCateory("product")}
    >
      <HeaderView />
    </PrefetchHydration>
  );
}
