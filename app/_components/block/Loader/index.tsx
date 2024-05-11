"use client";
import React from "react";
import "./loader.css";
import WithDogi from "./WithdogiIcon";
import { useRecoilValue } from "recoil";
import { loaderState } from "@/app/Store/loaderAtom";
const Loader = () => {
  // useQuery 훅을 사용하여 전역 isLoading 상태 관리
  const isLoading = useRecoilValue(loaderState);

  return (
    <div className={`loader-container ${isLoading ? "" : "hidden"}`}>
      <div className="loader-wrapper">
        <WithDogi />
        <p className="text">잠시만 기다려주세요...!</p>
      </div>
    </div>
  );
};

export default Loader;
