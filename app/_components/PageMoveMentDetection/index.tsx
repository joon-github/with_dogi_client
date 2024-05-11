"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loaderState } from "@/app/Store/loaderAtom";
export default function PageMoveMentDetection({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const setIsloading = useSetRecoilState(loaderState);
  useEffect(() => {
    setIsloading(false);
  }, [pathname, searchParams]);

  return (
    <div className={`h-screen flex flex-col overflow-y-auto`}>{children}</div>
  );
}
