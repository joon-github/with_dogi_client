import React from "react";

const Input = React.forwardRef<
  HTMLElement, // HTMLInputElement 대신에 일반 HTMLElement를 사용
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
>((props, ref) => {
  return props.type === "textarea" ? (
    <textarea
      ref={ref as React.LegacyRef<HTMLTextAreaElement>}
      className="w-full h-full focus:outline-none p-2 rounded-md"
      {...props}
    />
  ) : (
    <input
      ref={ref as React.LegacyRef<HTMLInputElement>}
      className="w-full h-full focus:outline-none p-2 rounded-md"
      onChange={props.onChange}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
