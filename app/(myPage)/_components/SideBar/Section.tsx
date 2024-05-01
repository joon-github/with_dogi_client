interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className="flex flex-col border-b border-slate-400 py-4 px-6">
      <h3 className="text-base font-bold mb-4">{title}</h3>
      <div className="flex flex-col text-sm gap-2">{children}</div>
    </section>
  );
}
