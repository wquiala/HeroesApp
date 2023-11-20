import { createContext } from 'react';
import { State } from './authReducer';

export const AuthContext = createContext<any>({} as State);
