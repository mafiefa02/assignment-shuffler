"use client";

import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button, ButtonProps } from "./ui/button";

const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      {...props}
    >
      {pending ? <Loader2Icon className="shrink-0" /> : props.children}
    </Button>
  );
};

export default SubmitButton;
