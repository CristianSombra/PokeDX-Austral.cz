import '@ionic/react/css/ionic.bundle.css';
import './App.css';
import { setupIonicReact } from '@ionic/react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Landing from './views/landing/Landing.js';
import Home from "./views/home/Home.js";

setupIonicReact();

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={Landing} />
          <Route path="/home" exact component={Home} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;