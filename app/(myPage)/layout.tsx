import PrefetchHydration from "../_shared/components/PrefetchHydration/PrefetchHydration";
import Logo from "../_shared/components/molecule/Logo";

export default function myPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrefetchHydration queries={[]}>
      <Logo href="/products" width={200} />
      {children}
    </PrefetchHydration>
  );
}
