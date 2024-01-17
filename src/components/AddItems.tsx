"use client";

import CustomInput from "-/components/CustomInput";
import SubmitButton from "-/components/SubmitButton";
import { cn } from "-/lib/utils";
import { PlusIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

type fnType = (
  fieldName: string,
  currentParams: string,
  currentState: { message: string } | null,
  data: FormData,
) => Promise<{ message: string }>;

const AddItems = (props: { fn: fnType; name: string }) => {
  const params = useSearchParams();
  const fnWithParams = props.fn.bind(null, props.name, params.toString());
  const [state, formAction] = useFormState(fnWithParams, null);

  const isError = !!state; // returns true if state is not null
  const error = isError && state.message; // if isError, returns the error message

  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-sm text-destructive">{error}</p>

      <form
        action={formAction}
        className="flex w-full items-center gap-4"
      >
        <CustomInput
          placeholder="type in somethings"
          name={props.name}
          className={cn("w-full", isError && "border-destructive")}
        />

        <SubmitButton
          tabIndex={-1}
          variant="ghost"
          size="icon"
        >
          <PlusIcon className="shrink-0" />
        </SubmitButton>
      </form>
    </div>
  );
};

export default AddItems;
