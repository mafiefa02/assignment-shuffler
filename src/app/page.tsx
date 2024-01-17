import Items from "-/components/Items";
import Person from "-/components/Person";
import ResponsivePanelGroup from "-/components/ResponsivePanelGroup";
import ShuffleResult from "-/components/ShuffleResult";
import Socials from "-/components/Socials";
import { Button, buttonVariants } from "-/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "-/components/ui/resizable";
import Link from "next/link";
import { GrPowerReset } from "react-icons/gr";

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

          <footer className="flex w-full flex-col-reverse items-center justify-between gap-8 pb-8 sm:flex-row sm:pb-0">
            <Socials />

            <div className="flex w-full items-center gap-4 sm:w-auto">
              <Link
                href={"/"}
                className={buttonVariants({
                  variant: "outline",
                  className: "group flex items-center gap-2",
                })}
              >
                <span className="hidden sm:inline">reset </span>
                <GrPowerReset className="shrink-0 group-hover:text-primary" />
              </Link>

              <Button className="w-full sm:w-auto">shuffle</Button>
            </div>
          </footer>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
