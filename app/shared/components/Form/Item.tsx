import React from "react";
import { FormContext } from ".";

interface Props {
  label: string | React.ReactNode;
  fieldKey: string;
  validation: any;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Item({
  label,
  fieldKey,
  validation,
  icon,
  children,
}: Props) {
  const data = React.useContext(FormContext);
  const register = data?.register;
  const errors = data?.errors;
  // 'register' 함수를 사용하여 필드를 등록하고, 반환된 props를 자식에게 전달
  const childProps = register ? { ...register(fieldKey, validation) } : {};

  const childWithProps = React.Children.map(children, (child) =>
    React.isValidElement(child) ? React.cloneElement(child, childProps) : child
  );

  const isError = errors?.[fieldKey];
  const errorClasses = isError
    ? "border border-red-500 focus:border-red-500"
    : "border border-gray-300";
  return (
    <>
      <div
        className={`flex items-center h-14 ${errorClasses} rounded-md  bg-white`}
      >
        <label className="flex items-center whitespace-nowrap gap-2 min-w-min w-20 pl-3 border-r font-medium text-sm pr-2">
          {icon}
          <span>{label}</span>
        </label>
        {childWithProps}
      </div>
      <div className="h-6">
        {errors?.[fieldKey] && (
          <div className="text-red-400">
            {errors?.[fieldKey]?.message?.toString()}
          </div>
        )}
      </div>
    </>
  );
}
