"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from 'react';
export default function PageMoveMentDetection({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    queryClient.setQueryData(["isLoading"], false);
  },[pathname,searchParams])

  return(
    <div className={`h-screen flex flex-col`}>
      {children}
    </div>
  )
}