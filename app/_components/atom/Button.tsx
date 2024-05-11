type ButtonType = "button" | "submit" | "reset";

interface Props {
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
}
export default function Button({ type = "button", onClick, children }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-fit border py-2 px-4 rounded-lg border-slate-400 text-gray-500 hover:bg-slate-50 hover:text-black transition-colors focus:outline-none"
    >
      {children}
    </button>
  );
}
