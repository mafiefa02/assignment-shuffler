"use client";

import { ResizablePanelGroup } from "-/components/ui/resizable";
import { cn } from "-/lib/utils";

import { useWindowSize } from "@uidotdev/usehooks";

const ResponsivePanelGroup = (props: {
  children: React.ReactNode;
  className: string;
}) => {
  const size = useWindowSize();
  const isMobile = size.width && size.width <= 640;

  return (
    <ResizablePanelGroup
      direction={isMobile ? "vertical" : "horizontal"}
      className={cn("flex-grow", props.className)}
    >
      {props.children}
    </ResizablePanelGroup>
  );
};

export default ResponsivePanelGroup;
