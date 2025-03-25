import { Tab as HeadlessTab } from "@headlessui/react";
import React from "react";

export const Tab = (props: React.ComponentProps<typeof HeadlessTab>) => {
  return <HeadlessTab className="cursor-pointer" {...props}></HeadlessTab>;
};
