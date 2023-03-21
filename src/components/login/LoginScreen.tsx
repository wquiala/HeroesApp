import { useNavigate } from 'react-router-dom';
import { HeroesApp } from '../../HeroesApp';
import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  console.log(user);
  const handleLogin = () => {
    const accion = {
      type: '[auth] login',
      payload: { name: 'Wilfredo', email: 'kjkjck' },
    };

    dispatch(accion);
    const path = localStorage.getItem('lastPath') || '/';

    navigate(path, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
