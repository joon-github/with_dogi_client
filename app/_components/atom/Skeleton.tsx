import { Skeleton } from "@nextui-org/react";
export default function AtomSkeleton({ ...props }) {
  return (
    <Skeleton
      className="min-h-[50px] min-w-[200px] rounded-lg"
      classNames={{
        base: "pb-4 pt-2",
        content: "mb-4",
      }}
      {...props}
    />
  );
}
