import { Context, createContext } from "react";
import { RedefineContext } from "../../types/dataUtils/Redefined";

export const AuthContext = (<RedefineContext>createContext)();
