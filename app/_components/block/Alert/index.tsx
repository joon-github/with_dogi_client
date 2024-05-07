// 사용자 정의 Alert 컴포넌트
"use client";
import { useState } from 'react';

export default function Alert() {
  const [isShow, setIsShow] = useState(false);
  return(
    <div className="absolute inset-x-0 inset-y-0 z-50 flex justify-center">
      <div className="flex justify-center items-center relative border border-black rounded-lg bg-white w-[100px] h-[100px] top-6">
        <p>알람!</p>
      </div>
    </div>
  )
}
