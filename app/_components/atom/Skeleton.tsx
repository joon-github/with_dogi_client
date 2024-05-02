import { Skeleton } from "@nextui-org/react";
export default function AtomSkeleton({ ...props }) {
  return <Skeleton className="w-fit rounded-lg" {...props} />;
}
