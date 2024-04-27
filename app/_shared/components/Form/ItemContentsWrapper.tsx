import React from "react";

// 타입을 HTMLInputElement로 명확히 지정합니다.
const ItemContentsWrapper = React.forwardRef<
  HTMLDivElement,
  React.InputHTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-full focus:outline-none p-2 rounded-md"
      {...props}
    >
      {props.children}
    </div>
  );
});

ItemContentsWrapper.displayName = "div";

export default ItemContentsWrapper;
