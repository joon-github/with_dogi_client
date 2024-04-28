import { Checkbox } from "@/app/_shared/components/atom";

interface Props {
  value?: string;
  label: string | React.ReactNode;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (isSelected: boolean) => void;
  onChangeValue?: (value: string) => void;
}
export default function AgreementCheckbox({
  value,
  label,
  children,
  onChange,
  checked,
  onChangeValue,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Checkbox
          value={value}
          isSelected={checked}
          onChange={(e: any) => {
            if (onChangeValue) {
              onChangeValue(e.target.value);
            }
          }}
          onValueChange={(isSelected: boolean) => {
            if (onChange) {
              onChange(isSelected);
            }
          }}
        />
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}
