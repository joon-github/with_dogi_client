"use client";
import React, { useEffect } from "react";
import { FormContext } from ".";

interface Props {
  label?: string | React.ReactNode;
  fieldKey: string;
  validation?: any;
  children: React.ReactNode;
  icon?: React.ReactNode;
  watchField?: string;
  value?: string | number | null;
  className?: string;
}

export default function Item({
  label,
  fieldKey,
  validation,
  icon,
  watchField = "",
  value = null,
  className = "",
  children,
}: Props) {
  const data = React.useContext(FormContext);
  useEffect(() => {
    if (value) {
      data?.setValue(fieldKey, value);
    }
  }, [value, fieldKey, data]);
  const register = data?.register;
  const errors = data?.errors;
  const childProps = register
    ? {
        ...register(
          fieldKey,
          watchField !== "" ? validation(data?.watch(watchField)) : validation
        ),
        ...(value ? { value } : {}),
      }
    : {};

  const childWithProps = React.Children.map(children, (child) => {
    return React.isValidElement(child)
      ? React.cloneElement(child, childProps)
      : child;
  });

  const isError = errors?.[fieldKey];
  const errorClasses = isError
    ? "border border-red-500 focus:border-red-500"
    : "border border-gray-300";
  return (
    <div className="flex-1">
      <div
        className={`flex items-center min-h-14  ${errorClasses} rounded-md  bg-white ${className}`}
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
    </div>
  );
}
