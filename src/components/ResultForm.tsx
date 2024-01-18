"use client";

import ShuffleResult from "-/components/ShuffleResult";
import { shuffleItems } from "-/lib/actions";
import { cn } from "-/lib/utils";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

const ResultForm = (props: {
  children: React.ReactNode;
  className: string;
}) => {
  const params = useSearchParams();

  const fnWithParams = shuffleItems.bind(null, params.toString());
  const [state, formAction] = useFormState(fnWithParams, null);

  return (
    <form
      action={formAction}
      className={cn(props.className)}
    >
      <h1 className="text-xl font-semibold text-primary sm:text-2xl">
        result;
      </h1>

      <ShuffleResult state={state} />

      {props.children}
    </form>
  );
};

export default ResultForm;
