"use client";

import { useCheckOwner } from "@/app/_service/product/useProductService";

interface Params {
  id: string;
}
interface Props {
  params: Params;
}

export default function EditeProduct({ params }: Props) {
  const { id } = params;
  useCheckOwner(Number(id));
  return <div>editeProduct+{id}</div>;
}
