import { Checkbox } from "@/app/_shared/components/atom";

interface Props {
  label: string;
  children?: React.ReactNode;
}
export default function AgreementCheckbox({ label, children }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Checkbox />
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}
