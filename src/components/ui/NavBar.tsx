import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    const accion = {
      type: '[auth] logout',
    };
    dispatch(accion);
    navigate('/login', {
      replace: true,
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/marvel">
              Marvel
            </NavLink>

            <NavLink className="nav-item nav-link" to="/dc">
              DC
            </NavLink>
            <NavLink className="nav-item nav-link" to="/search">
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">{user.name}</span>
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
