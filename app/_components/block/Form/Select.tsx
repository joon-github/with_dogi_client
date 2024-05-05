import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface SelectData {
  id: number;
  value: number;
  label: string;
  children?: SelectData[] | undefined;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  data: SelectData[] | undefined | []; // data 배열을 필수 prop으로 지정
  ariaLabel?: string;
  parentLabel?: string;
}

const Selects = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { data, ariaLabel, ...rest } = props;
    const renderOptions = (
      items: SelectData[],
      parentLabel: string = ""
    ): any => {
      if (!items) return null;
      return items.flatMap((item: SelectData) => {
        const newLabel = parentLabel
          ? `${parentLabel} - ${item.label}`
          : item.label;

        if (!item.children || item.children.length === 0) {
          return (
            <SelectItem key={item.id} value={item.value}>
              {newLabel}
            </SelectItem>
          );
        } else {
          return renderOptions(item.children, newLabel);
        }
      });
    };
    const etc = { ...rest } as any;
    return (
      <Select
        ref={ref}
        {...etc}
        aria-label={ariaLabel}
        style={{
          background: "white",
        }}
      >
        {data ? renderOptions(data) : []}
      </Select>
    );
  }
);

Selects.displayName = "Selects";

export default Selects;
