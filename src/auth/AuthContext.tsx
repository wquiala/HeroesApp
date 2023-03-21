import { createContext } from 'react';
import { State } from './authReducer';
import { initialState } from '../HeroesApp';

export const AuthContext = createContext<any>({} as State);
