"use client";
import React from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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
          const errorParsed = JSON.parse(error.message);
          if (errorParsed.statusCode === 403) {
            router.push("/login");
          }
        },
      }),
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      {/* {process.env.NODE_ENV === "production" ? null : (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
    </QueryClientProvider>
  );
}

export default ReactQueryProcider;
