import { useState } from "react";

export default function useAgreementContents() {
  const [values, setValues] = useState<string[]>([]);

  const onChangeAllCheck = (checked: boolean) => {
    const values = ["agreement", "ageOver14", "privacy", "thirdparty"];
    setValues(checked ? values : []);
  };

  const onChangeValue = (value: string) => {
    if (values.includes(value)) {
      setValues(values.filter((v) => v !== value));
    } else {
      setValues([...values, value]);
    }
  };

  return {
    values,
    onChangeAllCheck,
    onChangeValue,
  };
}
