import Logo from "../../_components/block/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex flex-col gap-10 items-center px-6 h-full pt-10">
        <Logo href="/products" width={250} />
        <div className="w-full max-w-[500px] min-w-[350px]">{children}</div>
      </div>
    </main>
  );
}
