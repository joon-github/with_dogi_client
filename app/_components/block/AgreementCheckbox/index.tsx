import { Checkbox } from "@/app/_components/atom";

interface Props {
  value?: string;
  label: string | React.ReactNode;
  children?: React.ReactNode;
  checked?: boolean;
  onChange?: (isSelected: boolean) => void;
  onChangeValue?: (value: string) => void;
  isRequired?: boolean;
}
export default function AgreementCheckbox({
  value,
  label,
  children,
  onChange,
  checked,
  onChangeValue,
  isRequired,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Checkbox
          value={value}
          isSelected={checked}
          isRequired={isRequired}
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
