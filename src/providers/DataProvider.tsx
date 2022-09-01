import axios from 'axios';
import { useMemo } from 'react';
import environment from '../conf/environment';
import { WithChildren } from "../types/proptypes";
import { DataContext } from "../utils/context/data";
import { DataService } from './types/DataProvider';
import { Page } from './types/Page';

const API_BASE_URL = environment.apiBaseUrl;

export function DataProvider({ children }: WithChildren) {
  const getList = (resource: string) => axios.get(`${API_BASE_URL}/${resource}`);

  const getListWithParams = (resource: string, {page, pageSize}: Page) => (
    axios.get(`${API_BASE_URL}/${resource}?page=${page}&pageSize=${pageSize}`)
  );

  const getOne = (resource: string, id: number) =>
    axios.get(`${API_BASE_URL}/${resource}/${id}`);

  const deleteOne = (resource: string, id: number) =>
    axios.delete(`${API_BASE_URL}/${resource}/${id}`);

  const save = (resource: string, props: unknown) =>
    axios.post(`${API_BASE_URL}/${resource}`, props);

  const update = (resource: string, id: number, props: unknown) =>
    axios.put(`${API_BASE_URL}/${resource}/${id}`, props);

  const methodToProvide = useMemo<DataService>(
    () => ({
      getList,
      getListWithParams,
      save,
      update,
      getOne,
      deleteOne,
    }),
    []
  );

  return (
    <DataContext.Provider value={methodToProvide}>
      {children}
    </DataContext.Provider>
  );
}
