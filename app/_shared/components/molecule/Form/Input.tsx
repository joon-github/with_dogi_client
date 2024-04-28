import React from "react";
// 타입을 HTMLInputElement로 명확히 지정합니다.
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="w-full h-full focus:outline-none p-2 rounded-md"
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
