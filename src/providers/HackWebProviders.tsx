import React from "react";
import { WithChildren } from "../types/proptypes";
import { AuthProvider } from "./AuthProvider";
import { DataProvider } from "./DataProvider";

export const HackWebProviders = ({ children }: WithChildren) => (
  <AuthProvider>
    <DataProvider>
      {children}
    </DataProvider>
  </AuthProvider>
);
