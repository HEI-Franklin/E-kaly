import { WithChildren } from "../WithChildren";
import { EditMode } from "./mode";

export type EditDrawer = WithChildren<{
  label: string;
  mode: EditMode;
  // isOpen: boolean;
  // onOpen(): void;
  // onClose(): void;
}>;
