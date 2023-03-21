export interface TypesAuth {
  login: string;
  logout: string;
}

export type AuthAction =
  | {
      type: '[auth] login';
      payload: { name: string; email: string };
    }
  | { type: '[auth] logout' };
