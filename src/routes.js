import React, { Suspense, Fragment,lazy} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./Pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import GuestGuard from "./components/GuestGuard";
import LoginPage from "./Pages/auth/LoginPage";
import AuthGuard from "./components/AuthGuard";

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);



const routes = [
 

  {
    path: "*",
    layout: ClientLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: HomePage,
      },
      {
        exact: true,
        path: "/register",
        component: lazy(() => import("./Pages/auth/RegisterPage")),
      },
      {
        exact: true,
        path: "/DetailProduit/:key",
        component: lazy(() => import("./Pages/DetailProduit")),
      },
      {
        exact: true,
        path: "/ListeProduit/:key",
        component: lazy(() => import("./Pages/ListeProduit")),
      },




      {
        exact: true,
        path: "/login",
        component: lazy(() => import("./Pages/auth/LoginPage")),
      },
      {
        exact: true,
        path: "/reset-password",
        component: lazy(() => import("./Pages/auth/ResetPasswordPage")),
      },
      
    
      
    ]
  },
 
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./Pages/errors/NotFoundPage")),
  },
  
 
  
  
];





export default routes;