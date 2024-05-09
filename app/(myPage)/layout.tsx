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
      <div className="flex flex-1">
        <SideBar />
        <main
          className="w-full py-8 px-[100px]"
        >
          {children}
        </main>
      </div>
    </PrefetchHydration>
  );
}
