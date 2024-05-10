interface Pops {
  title: string;
  children?: React.ReactNode;
}

export default function SubTitle({ title, children }: Pops) {
  return (
    <div className="flex justify-between border-b border-slate-400 mb-4">
      <h1 className=" text-3xl font-bold mb-1 pb-2">{title}</h1>
      {children}
    </div>
  );
}
