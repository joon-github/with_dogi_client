"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

function ReactQueryProcider({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 2,
          staleTime: 5 * 60 * 1000,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration> */}
      {/* {process.env.NODE_ENV === "production" ? null : (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
    </QueryClientProvider>
  );
}

export default ReactQueryProcider;
