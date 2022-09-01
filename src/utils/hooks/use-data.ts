import { useContext } from "react";
import { DataService } from "../../providers/types/DataProvider";
import { DataContext } from "../context/data";

export const useData = <T = unknown>() => (
  useContext(DataContext) as DataService<T>
);
