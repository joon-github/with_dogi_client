import Atom from "@/app/_shared/components/atom";
import AtomCheckbox from "../atom/Checkbox";

interface Props {
  label: string;
}
export default function AgreementCheckbox({ label }: Props) {
  return (
    <div className="flex">
      <div>
        <AtomCheckbox />
      </div>
      <span>{label}</span>
    </div>
  );
}
