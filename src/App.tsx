import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Pages */
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Choose from './pages/Choose/Choose';
import Splash from './pages/Splash/Splash';
import Interest from './pages/Interest/Interest';
import Invite from './pages/Invite/Invite';
import Promote from './pages/Promote/Promote';
import ProfileAbout from './pages/ProfileAbout/ProfileAbout';
import Settings from './pages/Settings/Settings';
import SettingsPayment from './pages/Settings/Payment/Payment';
import Support from './pages/Support/Support';
import Browse from './pages/Browse/Browse';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/choose">
          <Choose />
        </Route>
        <Route exact path="/splash">
          <Splash />
        </Route>
        <Route exact path="/interest">
          <Interest />
        </Route>
        <Route exact path="/invite">
          <Invite />
        </Route>
        <Route exact path="/promote">
          <Promote />
        </Route>
        <Route exact path="/profileabout">
          <ProfileAbout />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/settings/payment">
          <SettingsPayment />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/browse">
          <Browse />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
