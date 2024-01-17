import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <Loader2Icon
        size={32}
        className="shrink-0 animate-spin"
      />
    </div>
  );
};

export default Loading;
