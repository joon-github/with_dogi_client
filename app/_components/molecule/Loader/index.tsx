"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import "./loader.css";
import WithDogi from "./WithdogiIcon";

const Loader = () => {
  // useQuery 훅을 사용하여 전역 isLoading 상태 관리
  const { data: isLoading } = useQuery({
    queryKey: ["isLoading"],
    queryFn: () => false, // 초기 상태 설정
    staleTime: Infinity, // 데이터가 만료되지 않도록 설정
  });
  return isLoading ? (
    <div className="loader-container">
      <div className="loader-wrapper">
        <WithDogi />
        <p className="text">잠시만 기다려주세요...!</p>
      </div>
    </div>
  ) : null;
};

export default Loader;
