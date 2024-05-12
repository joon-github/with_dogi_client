"use client";
import React, { useContext, useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { FormContext } from ".";

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
  defaultValue?: number | string | undefined;
  fieldKey: string;
}

const Selects = React.forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { data, fieldKey, ariaLabel, ...rest } = props;
    const [selectedKeys, setSelectedKeys] = useState<
      string | number | undefined
    >(undefined);
    const context = useContext(FormContext);
    useEffect(() => {
      if (props.defaultValue) {
        setSelectedKeys(props.defaultValue);
        context?.setValue(fieldKey, props.defaultValue);
      }
    }, [context, fieldKey, props.defaultValue]);
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
    const Options = data ? renderOptions(data) : [];

    return (
      <Select
        ref={ref}
        {...etc}
        value={selectedKeys}
        selectedKeys={[selectedKeys]}
        aria-label={ariaLabel}
        onChange={(event) => {
          setSelectedKeys(event.target.value);
          context?.setValue(fieldKey, event.target.value);
        }}
        style={{
          background: "white",
        }}
      >
        {Options}
        <SelectItem key={999} value={"test"}>
          test
        </SelectItem>
      </Select>
    );
  }
);

Selects.displayName = "Selects";

export default Selects;
