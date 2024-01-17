"use client";

import { cn } from "-/lib/utils";

import { useWindowSize } from "@uidotdev/usehooks";

import { ResizablePanelGroup } from "./ui/resizable";

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
