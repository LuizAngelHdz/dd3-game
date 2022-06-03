import React from "react";
import "./App.css";

import { routes } from "./Routes/Routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeState } from "./Context/Theme/ThemeState";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((itemRoute) => (
          <Route
            key={itemRoute.path}
            path={itemRoute.path}
            exact={itemRoute.exact}
            render={(props) => (
              <ThemeState>
                <itemRoute.component {...props} />
              </ThemeState>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
