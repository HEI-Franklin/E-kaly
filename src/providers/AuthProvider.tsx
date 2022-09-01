import React, { useMemo } from 'react';
import axios from 'axios';
import { WithChildren } from '../types/proptypes';
import { AuthContext } from '../utils/context/auth';
import { AuthService, ConnectType, Save } from './types/AuthProvider';
import environment from '../conf/environment';

export const AuthProvider = ({ children }: WithChildren) => {
  
  const connect: ConnectType = (username, password) => (
    axios.get(environment.apiBaseUrl, {
      headers: {
        authorization: `Basic ${window.btoa(`${username}:${password}`)}`
      }
    })
  );

  const logout = (): void => (
    window.localStorage.removeItem('hack_auth_token')
  );

  const save: Save = (token): void => (
    window.localStorage.setItem('hack_auth_token', token)
  );

  const getAuth = () => ({
    authorization: `Basic ${window.localStorage.getItem("token") || ''}`,
  });

  const methods = useMemo<AuthService>(() => ({
    connect,
    logout,
    save,
    getAuth
  }), []);
  
  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
}
