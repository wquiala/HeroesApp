import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { DashboardRoutes } from './DashboardRoutes';

interface Props {
  children: JSX.Element;
}
Navigate;
export const PrivateRoute = (props: Props) => {
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', pathname + search);
  const { user } = useContext(AuthContext);
  return user.logged ? props.children : <Navigate to={'/login'} />;
};
