import React from "react";
import { FormContext } from ".";

interface Props {
  label: string;
  fieldKey: string;
  validation: any;
  children: React.ReactNode;
}

export default function Item({ label, fieldKey, validation, children }: Props) {
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
    : "border";
  return (
    <>
      <div
        className={`flex items-center h-12 ${errorClasses} rounded-md  bg-white`}
      >
        <label htmlFor={label} className="w-20 pl-3 border-r font-medium text-sm">
          {label}
        </label>
        {childWithProps}
      </div>
      <div className="h-8">
        {errors?.[fieldKey] && (
          <div className="text-red-400">
            {errors?.[fieldKey]?.message?.toString()}
          </div>
        )}
      </div>
    </>
  );
}
