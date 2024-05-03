import { cn } from "-/lib/utils";
import { useSearchParams } from "next/navigation";

const ShuffleResult = ({ state }: { state: { message: string } | null }) => {
  const params = useSearchParams();
  const result = params.get("result")?.split("\n") ?? [
    "example",
    "assignee 1: assignment 1, assignment 2",
  ];

  const isError = !!state;
  const error = isError && state.message;

  return (
    <code
      className={cn("flex-grow rounded-lg pb-4", isError && "text-destructive")}
    >
      {isError ? (
        error
      ) : (
        <ul>
          {result.map((value, i) => (
            <li key={i}>{value.trim()}</li>
          ))}
        </ul>
      )}
    </code>
  );
};

export default ShuffleResult;
