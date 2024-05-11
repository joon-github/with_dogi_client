"use client";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { loaderState } from "@/app/Store/loaderAtom";
export default function AtomLink(props: any) {
  const setIsloading = useSetRecoilState(loaderState);
  const showLoader = () => {
    setIsloading(true);
  };
  return (
    <Link {...props} onClick={showLoader}>
      {props.children}
    </Link>
  );
}
