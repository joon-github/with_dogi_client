import queryOptions from "@/app/service/category/queryOptions";
import PrefetchHydration from "../_shared/components/PrefetchHydration/PrefetchHydration";
import Logo from "../_shared/components/molecule/Logo";

export default function myPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queries = [queryOptions.all("product")];
  return (
    <PrefetchHydration queries={queries}>
      <Logo href="/products" width={200} />
      {children}
    </PrefetchHydration>
  );
}
