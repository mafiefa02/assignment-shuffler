"use client";

import { Button, ButtonProps } from "-/components/ui/button";
import { CheckIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FaCopy } from "react-icons/fa";
import { toast } from "sonner";

const CopyToClipboard = (props: ButtonProps) => {
  const params = useSearchParams();
  const result = params.get("result");

  function onClick() {
    if (!result)
      return toast("no text to copy", { cancel: { label: "close" } });

    navigator.clipboard.writeText(result);

    return toast("text copied to clipboard", {
      icon: <CheckIcon size={16} />,
      cancel: { label: "close" },
    });
  }

  return (
    <Button
      onClick={onClick}
      type="button"
      {...props}
    >
      <span className="hidden md:inline">copy result </span>
      <FaCopy className="shrink-0 group-hover:text-primary" />
    </Button>
  );
};

export default CopyToClipboard;
