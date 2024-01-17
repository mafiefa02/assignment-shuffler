"use client";

import { Input, InputProps } from "-/components/ui/input";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

type CustomInputProps = InputProps;

const CustomInput = (props: CustomInputProps) => {
  const [value, setValue] = useState("");
  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) setValue("");
    return;
  }, [pending]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      {...props}
    />
  );
};

export default CustomInput;
