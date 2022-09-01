import { AxiosResponse } from "axios"
import { Page } from "./Page";

export type DataService<T = any> = {
  getList: (ressource: string) => Promise<AxiosResponse<T[], T>>;
  getListWithParams: (resource: string, page: Page) => Promise<AxiosResponse<T[], T>>;
  getOne: (resource: string, id: number) => Promise<AxiosResponse<T, T>>;
  deleteOne: (resource: string, id: number) => Promise<AxiosResponse<T, T>>;
  save: (resource: string, props: T) => Promise<AxiosResponse<T, T>>;
  update: (resource: string, id: number, props: T) => Promise<AxiosResponse<T, T>>;
}
