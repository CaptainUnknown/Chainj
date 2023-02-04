import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
    homeOutline,
    chatbubbleOutline,
    searchOutline,
    personOutline,
    notificationsOutline
} from 'ionicons/icons';

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
                      <IonTabButton tab="tab1" href="/browse/home">
                          <IonIcon icon={homeOutline} />
                          { /* <IonLabel> Home </IonLabel>} */ }
                      </IonTabButton>
                      <IonTabButton tab="tab2" href="/browse/inbox">
                          <IonIcon icon={chatbubbleOutline} />
                          { /* <IonLabel> Home </IonLabel>} */ }
                      </IonTabButton>
                      <IonTabButton tab="tab3" href="/browse/search">
                          <IonIcon icon={searchOutline} />
                          { /* <IonLabel> Home </IonLabel>} */ }
                      </IonTabButton>
                      <IonTabButton tab="tab4" href="/browse/notifications">
                          <IonIcon icon={notificationsOutline} />
                          { /* <IonLabel> Home </IonLabel>} */ }
                      </IonTabButton>
                      <IonTabButton tab="tab5" href="/browse/profile">
                          <IonIcon icon={personOutline} />
                          { /* <IonLabel> Home </IonLabel>} */ }
                      </IonTabButton>
                  </IonTabBar>
              </IonTabs>
          </IonReactRouter>
    </IonPage>
  );
};

export default Browse;
