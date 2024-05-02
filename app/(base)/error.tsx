"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>서버 오류입니다.</h2>
      <button
        onClick={
          // 세그먼트를 재 렌더링 하여 복구를 시도합니다.
          () => reset()
        }
      >
        재시도
      </button>
    </div>
  );
}
