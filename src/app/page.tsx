import { Button } from "-/components/ui/button";
import { Input } from "-/components/ui/input";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "-/components/ui/resizable";
import { Separator } from "-/components/ui/separator";
import { PlusIcon } from "lucide-react";

export default function Home() {
  return (
    <ResizablePanelGroup
      className="flex-grow container"
      direction="horizontal"
    >
      <ResizablePanel
        defaultSize={35}
        className="flex flex-col gap-6 py-8 px-4 w-full items-start"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">list of items;</h1>
          <h4 className="font-sm text-muted-foreground">
            please list all of the items u want to sort
          </h4>
        </div>

        <Separator />

        <div className="flex-grow flex flex-col gap-2">list is empty!</div>

        <div className="flex items-center gap-4 w-full">
          <Input className="w-full" />
          <Button>
            <PlusIcon
              size={20}
              className="shrink-0"
            />
          </Button>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="p-8">result will be here</ResizablePanel>
    </ResizablePanelGroup>
  );
}
