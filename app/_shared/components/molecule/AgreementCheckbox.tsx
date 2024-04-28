import { Checkbox } from "@/app/_shared/components/atom";

interface Props {
  value?: string;
  label: string | React.ReactNode;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (isSelected: boolean) => void;
}
export default function AgreementCheckbox({
  value,
  label,
  children,
  checked,
  onChange,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Checkbox
          value={value}
          isSelected={checked}
          onValueChange={(isSelected: boolean) => {
            onChange(isSelected);
          }}
        />
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}
