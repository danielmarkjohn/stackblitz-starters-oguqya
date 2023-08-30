import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Tabs from './pages/Tabs';
import Register from './pages/register';
import Signin from './pages/signin';

setupIonicReact({});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
  try {
    await StatusBar.setStyle({
      style: Style.Dark
    });
  } catch { }
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/feed" />} exact={true} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/Signin" render={() => <Signin />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
