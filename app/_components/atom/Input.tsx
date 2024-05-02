export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full h-full focus:outline-none p-2 rounded-md"
    />
  );
}
