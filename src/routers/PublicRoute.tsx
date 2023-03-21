import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { Navigate } from 'react-router-dom';
interface Props {
  children: JSX.Element;
}

export const PublicRoute = (props: Props) => {
  const { user } = useContext(AuthContext);
  return user.logged ? <Navigate to={'/'} /> : props.children;
};
