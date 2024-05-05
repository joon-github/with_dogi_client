import { Select, SelectItem } from "@nextui-org/react";

export interface SelectData {
  id: number;
  value: number;
  label: string;
}
interface SelectsProps {
  data: SelectData[] | undefined;
  ariaLabel?: string;
  ref?: any;
}
export default function AtomSelect({ data, ref, ariaLabel }: SelectsProps) {
  return (
    <Select aria-label={"ariaLabel"} ref={ref}>
      {data?.map((item: any) => (
        <SelectItem key={item.id} value={item.value}>
          {item.label}
        </SelectItem>
      )) || []}
    </Select>
  );
}
