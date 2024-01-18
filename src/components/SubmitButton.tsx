"use client";

import { Button, ButtonProps } from "-/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      {...props}
    >
      {pending ? (
        <Loader2Icon className="shrink-0 animate-spin" />
      ) : (
        props.children
      )}
    </Button>
  );
};

export default SubmitButton;
