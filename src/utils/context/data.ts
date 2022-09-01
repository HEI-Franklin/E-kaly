import { createContext } from "react";
import { RedefineContext } from "../../types/dataUtils/Redefined";

export const DataContext = (<RedefineContext>createContext)();
