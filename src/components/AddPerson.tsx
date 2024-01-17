"use client";

import SubmitButton from "-/components/SubmitButton";
import { Input } from "-/components/ui/input";
import { addPerson } from "-/lib/actions";
import { cn } from "-/lib/utils";
import { PlusIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";

import CustomInput from "./CustomInput";

const AddPerson = () => {
  const params = useSearchParams();
  const addPersonWithCurrentParams = addPerson.bind(null, params.toString());
  const [state, formAction] = useFormState(addPersonWithCurrentParams, null);

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
          name="person-item"
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

export default AddPerson;
