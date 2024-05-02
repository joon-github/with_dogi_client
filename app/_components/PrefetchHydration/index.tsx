import { QueryClient } from "@tanstack/query-core";
import type { QueryFunction, QueryKey } from "@tanstack/react-query";
import { dehydrate } from "@tanstack/react-query";
import { cache, type PropsWithChildren } from "react";

import HydrateOnClient from "./HydrateOnClient";

type QueryItem = {
  queryKey: QueryKey;
  queryFn: QueryFunction;
};

type Props = {
  queries: QueryItem[];
};

const PrefetchHydration = async ({
  queries,
  children,
}: PropsWithChildren<Props>) => {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  // 여러 쿼리를 동시에 prefetch
  await Promise.all(
    queries.map(({ queryKey, queryFn }) =>
      queryClient.prefetchQuery({
        queryKey,
        queryFn,
      })
    )
  );

  const dehydratedState = dehydrate(queryClient);

  return <HydrateOnClient state={dehydratedState}>{children}</HydrateOnClient>;
};

export default PrefetchHydration;
