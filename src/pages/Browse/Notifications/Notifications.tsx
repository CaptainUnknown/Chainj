import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as NotFound } from "../../../assets/notfound.svg";
import { ReactComponent as UserAvatar } from "../../../assets/user.svg";
import {useState} from "react";

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState([
        <div className='notificationItem'>
            <UserAvatar />
            <h2> You have one new assignment from xyz </h2>
            <img src='https://picsum.photos/200/200?random=1'/>
        </div>
    ]);
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <h1> Notifications </h1>
              <div className='notificationsTime'> Yesterday </div>
                {notifications}

              {/* If notifications doesn't exist */}
              {/*
              <NotFound/>
              <h1> You've No Notifications </h1>
              */}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
