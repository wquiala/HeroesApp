import React from 'react';
import ReactDOM from 'react-dom/client';

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
