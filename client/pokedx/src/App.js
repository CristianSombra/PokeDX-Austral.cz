import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Landing from "./views/landing/Landing.js";
import Home from "./views/home/Home.js";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
