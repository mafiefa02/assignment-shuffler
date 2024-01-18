import { cn } from "-/lib/utils";
import { useSearchParams } from "next/navigation";

const ShuffleResult = ({ state }: { state: { message: string } | null }) => {
  const params = useSearchParams();
  const result = params.get("result")?.split("\n") ?? [
    "result will be displayed here!",
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
            <li key={i}>{value}</li>
          ))}
        </ul>
      )}
    </code>
  );
};

export default ShuffleResult;
