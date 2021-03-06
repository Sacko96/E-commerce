import React, { Suspense, Fragment, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
    path: "/dashboardAdmin",
    //guard: AuthGuard,
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: "/dashboardAdmin",
        component: lazy(() => import("./Pages/dashboardAdmin")),
      },
      {
        exact: true,
        path: "/dashboardAdmin/listcommande",
        component: lazy(() => import("./Pages/dashboardAdmin/AllCommandes")),
      },
    ],
  },

  
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
        path: "/Confirmation",
        component: lazy(() => import("./Pages/Confirmation")),
      },

      {
        exact: true,
        path: "/ListeTablbe",
        component: lazy(() => import("./Pages/listeTable")),
      },
      {
        exact: true,
        path: "/deleteuser",
        component: lazy(() => import("./Pages/listeTable/DeleteUser")),
      },
      {
        exact: true,
        path: "/createaccount",
        component: lazy(() => import("./Pages/listeTable/CreateUser")),
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
      {
        exact: true,
        path: "/account/profil",
        component: lazy(() => import("./Pages/Account/General")),
      },
    ],
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./Pages/errors/NotFoundPage")),
  },

  
];

export default routes;
