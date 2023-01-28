import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, triangle, images } from 'ionicons/icons';

import Home from './Home/Home';
import Inbox from './Inbox/Inbox';
import Notifications from './Notifications/Notifications';
import Profile from './Profile/Profile';
import Search from './Search/Search';

/* Custom CSS */
import './Browse.scss';

import { ReactComponent as GoBack } from "../../assets/uparrow.svg";

const Browse: React.FC = () => {
  return (
      <IonPage>
          <IonReactRouter>
              <IonTabs>
                  <IonRouterOutlet>
                      <Route path="/browse/home" component={Home} exact={true} />
                      <Route path="/browse/inbox" component={Inbox} exact={true} />
                      <Route path="/browse/search" component={Search} />
                      <Route path="/browse/notifications" component={Notifications} />
                      <Route path="/browse/profile" component={Profile} />
                      <Route path="/" render={() => <Redirect to="/browse/home" />} exact={true} />
                  </IonRouterOutlet>

                  <IonTabBar slot="bottom">
                      <IonTabButton tab="tab1" href="/tab1">
                          <IonIcon icon={triangle} />
                          <IonLabel> Home </IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab2" href="/tab2">
                          <IonIcon icon={images} />
                          <IonLabel> Inbox </IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab3" href="/tab3">
                          <IonIcon icon={square} />
                          <IonLabel> Search </IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab4" href="/tab4">
                          <IonIcon icon={triangle} />
                          <IonLabel> Notifications </IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab5" href="/tab5">
                          <IonIcon icon={images} />
                          <IonLabel> Profile </IonLabel>
                      </IonTabButton>
                  </IonTabBar>

              </IonTabs>
          </IonReactRouter>
    </IonPage>
  );
};

export default Browse;
