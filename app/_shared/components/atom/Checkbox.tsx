import React from "react";
import { Checkbox } from "@nextui-org/react";

export default function AtomCheckbox({ ...props }) {
  return <Checkbox {...props} color="default" isRequired />;
}
