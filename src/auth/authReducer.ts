import { TypesAuth, AuthAction } from '../types/types';
export interface State {
  name?: string;
  email?: string;
  logged: boolean;
}
export const authReducer = (state: State, action: AuthAction) => {
  switch (action.type) {
    case '[auth] login':
      return {
        ...action.payload,
        logged: true,
      };
    case '[auth] logout':
      return {
        logged: false,
      };

    default:
      return state;
  }
};
