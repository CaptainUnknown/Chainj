import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as NotFound } from "../../../assets/notfound.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              {/* If request doesn't exist */}
              <NotFound/>
              <h1> No Request Found </h1>
              <a> Post a request </a>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
