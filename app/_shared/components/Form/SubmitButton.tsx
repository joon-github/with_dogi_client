interface props {
  isLoading?: boolean;
}

export default function SubmitButton({ isLoading }: props) {
  return (
    <button
      className="w-full h-12 border rounded-md"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "로그인"}
    </button>
  );
}
