import Items from "-/components/Items";
import Person from "-/components/Person";
import ResponsivePanelGroup from "-/components/ResponsivePanelGroup";
import ShuffleResult from "-/components/ShuffleResult";
import Socials from "-/components/Socials";
import { Button } from "-/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "-/components/ui/resizable";

export default function Home() {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="flex-grow"
    >
      <ResizablePanel defaultSize={75}>
        <ResponsivePanelGroup className="container w-full flex-grow">
          <ResizablePanel
            style={{ overflowY: "auto" }}
            defaultSize={50}
            className="container flex w-full flex-col items-start gap-6 py-8"
          >
            <Items />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel
            style={{ overflowY: "auto" }}
            defaultSize={50}
            className="container flex w-full flex-col items-start gap-6 py-8"
          >
            <Person />
          </ResizablePanel>
        </ResponsivePanelGroup>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel
        style={{ overflowY: "auto" }}
        className="container py-8"
        defaultSize={25}
      >
        <div className="container flex h-full flex-col items-start gap-4">
          <h1 className="text-xl font-semibold text-primary sm:text-2xl">
            result;
          </h1>

          <ShuffleResult />

          <footer className="flex w-full items-center justify-between">
            <Socials />

            <Button>shuffle</Button>
          </footer>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
