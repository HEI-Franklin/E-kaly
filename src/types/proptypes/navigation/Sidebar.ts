import { BoxProps } from "@chakra-ui/react";

export type SidebarProps = BoxProps & {
  onClose: () => void;
}
