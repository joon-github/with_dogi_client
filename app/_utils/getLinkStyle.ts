import { useSelectedLayoutSegments } from "next/navigation";

export default function useGetLinkStyle() {
  const segments = useSelectedLayoutSegments();
  const getLinkStyle = (path: string) => {
    return segments.includes(path) ? "font-bold text-lime-600" : "";
  };
  return getLinkStyle;
}
