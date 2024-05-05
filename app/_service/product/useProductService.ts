import { useQuery } from "@tanstack/react-query";
import productQueryOptions from "./productQueryOption";

export function useMyBrand() {
  return useQuery(productQueryOptions.myBrand());
}
