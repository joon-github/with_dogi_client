interface Props {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function IconText({ icon, children }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
