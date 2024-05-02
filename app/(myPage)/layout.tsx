import PrefetchHydration from "../_components/PrefetchHydration";
import Header from "./_components/Header";
import SideBar from "./_components/SideBar";

export default function myPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrefetchHydration queries={[]}>
      <div className="h-full">
        <Header />
        <div className="flex h-full">
          <SideBar />
          <div className="py-8 px-[100px] w-full ">{children}</div>
        </div>
      </div>
    </PrefetchHydration>
  );
}
