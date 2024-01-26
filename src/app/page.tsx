import CopyToClipboard from "-/components/CopyToClipboard";
import Items from "-/components/Items";
import Person from "-/components/Person";
import ResponsivePanelGroup from "-/components/ResponsivePanelGroup";
import ResultForm from "-/components/ResultForm";
import Socials from "-/components/Socials";
import SubmitButton from "-/components/SubmitButton";
import { buttonVariants } from "-/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "-/components/ui/resizable";
import Link from "next/link";
import { GrPowerReset } from "react-icons/gr";

export const runtime = "edge";

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
        <ResultForm className="container flex h-full flex-col items-start gap-4">
          <footer className="flex w-full flex-col-reverse items-center justify-between gap-8 pb-8 sm:flex-row">
            <Socials />

            <div className="flex w-full items-center gap-4 sm:w-auto">
              <Link
                href={"/"}
                className={buttonVariants({
                  variant: "outline",
                  className: "group flex items-center gap-2",
                })}
              >
                <span className="hidden md:inline">reset </span>
                <GrPowerReset className="shrink-0 group-hover:text-primary" />
              </Link>

              <CopyToClipboard
                variant="outline"
                className="group flex items-center gap-2"
              />

              <SubmitButton className="w-full sm:w-auto">shuffle</SubmitButton>
            </div>
          </footer>
        </ResultForm>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
