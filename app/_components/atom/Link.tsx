"use client";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
export default function AtomLink(props: any) {
  const queryClient = useQueryClient();
  const showLoader = () => {
    queryClient.setQueryData(["isLoading"], true);
  };
  return (
    <Link {...props} onClick={showLoader}>
      {props.children}
    </Link>
  );
}
