"use client";
import React from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ResponseType } from "../_service/Service";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function ReactQueryProcider({ children }: React.PropsWithChildren) {
  const router = useRouter();
  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 0,
          staleTime: 5 * 60 * 1000,
        },
      },
      queryCache: new QueryCache({
        onError: (error) => {
          const responseError = error as unknown as ResponseType<unknown>;
          const isRequestError = responseError && "statusCode" in responseError;
          if (isRequestError && responseError.statusCode === 403) {
            router.push("/login");
            alert("로그인 해주세요.");
          }
        },
      }),
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default ReactQueryProcider;
