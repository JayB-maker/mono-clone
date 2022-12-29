import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(({ route, component, subRoutes }, key) => {
        return (
          <React.Fragment key={key}>
            {subRoutes?.length === 0 ? (
              <Route path={route} element={component} key={key} />
            ) : (
              <React.Fragment key={key}>
                {subRoutes.map(({ route, component }, subKey) => (
                  <Route path={route} element={component} key={subKey} />
                ))}
              </React.Fragment>
            )}
          </React.Fragment>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
