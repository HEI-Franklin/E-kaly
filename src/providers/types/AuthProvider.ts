import { AxiosResponse } from 'axios';

export type ConnectType = (username: string, password: string) => Promise<AxiosResponse<any, any>>;

export type Save = (token: string) => void;

export type AuthService = {
  connect: ConnectType;
  logout(): void;
  save(token: string): void;
  getAuth(): {
    authorization: string;
  }
}
