import { useContext } from "react";
import { FormContext } from ".";

export const enum Direction {
  ROW = "row",
  COLUMN = "column",
}

interface Props {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  direction?: Direction;
  text?: string;
}

export default function Form({
  children,
  isLoading,
  text,
  direction = Direction.COLUMN,
  onSubmit,
}: Props) {
  const formContext = useContext(FormContext);
  const handleSubmit = formContext?.handleSubmit;
  const onSubmitProps = {
    ...(handleSubmit ? { onSubmit: handleSubmit(onSubmit) } : {}),
  };
  return (
    <form
      {...onSubmitProps}
      className={
        direction === Direction.ROW
          ? "flex flex-row gap-4"
          : "flex flex-col gap-4"
      }
    >
      <div className="flex-1 w-full">{children}</div>
      <button
        className="min-w-[200px] h-12 border rounded-md bg-gray-100"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : text}
      </button>
    </form>
  );
}
