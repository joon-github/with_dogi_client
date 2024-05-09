import PrefetchHydration from "../_components/PrefetchHydration";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

export default function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrefetchHydration queries={[]}>
      <Header />
      <div className="flex flex-1 mt-[83px]">
        <SideBar />
        <main className="w-full py-8 px-[100px] h-min">{children}</main>
      </div>
    </PrefetchHydration>
  );
}
