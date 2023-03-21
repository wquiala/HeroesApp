import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Navbar } from './components/ui/NavBar';
import ErrorPage from './components/error/ErrorPage';
import { LoginScreen } from './components/login/LoginScreen';
import { MarvelScreen } from './components/marvel/MarvelScreen';
import { DcScreen } from './components/dc/DcScreen';
import { SearchScreen } from './components/search/SearchScreen';
import { HeroScreen } from './components/hero/HeroScreen';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { HeroesApp } from './HeroesApp';
/* 
const dashboardRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/hero/:heroId',
        element: <HeroScreen />,
      },

      {
        path: '/marvel',
        element: <MarvelScreen />,
      },
      {
        path: '/dc',
        element: <DcScreen />,
      },
      {
        path: '/search',
        element: <SearchScreen />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginScreen />,
  },
]);



 */ ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroesApp />

    {/* <AuthContext.Provider value={HeroesApp}>
      <RouterProvider router={dashboardRoutes} />
    </AuthContext.Provider> */}
  </React.StrictMode>,
);
