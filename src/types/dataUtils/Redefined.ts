import { Context } from "react";

export type RedefineContext<E = unknown> = {
  (defaultValue?: E): Context<E>;
}
