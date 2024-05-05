export default function SubTitle({ title }: { title: string }) {
  return (
    <h1 className="border-b border-slate-400 text-3xl font-bold mb-4 pb-2">
      {title}
    </h1>
  );
}
