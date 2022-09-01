import React, { ComponentType } from "react";
import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export type NavItemProps = FlexProps & {
  icon: IconType;
  to: string;
  children: React.ReactNode;
}
