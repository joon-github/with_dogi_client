"use client";
import { useContext } from "react";
import { FormContext } from ".";

interface Props {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

export default function Form({ children, onSubmit }: Props) {
  const formContext = useContext(FormContext);
  const handleSubmit = formContext?.handleSubmit;
  if (!handleSubmit) {
    return null; // 또는 다른 처리를 수행할 수 있음
  }
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
