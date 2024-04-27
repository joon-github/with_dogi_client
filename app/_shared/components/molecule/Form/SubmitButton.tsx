interface props {
  isLoading?: boolean;
  text: string;
}

export default function SubmitButton({ isLoading, text }: props) {
  return (
    <button
      className="w-full h-12 border rounded-md"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
}
