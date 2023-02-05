import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as NotFound } from "../../../assets/notfound.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <h1> Manage Assignments </h1>
              {/* If request exists */}
              <div className='notificationItem'>
                  <img src='https://picsum.photos/200/200?random=1'/>
                  <div className='notificationItemLeft'>
                      <h2> Username </h2>
                      <h1> Basic Accounting </h1>
                      <div className='notificationTag'> Completed </div>
                  </div>
                  <div className='notificationItemRight'>
                      <p> 1 hour ago </p>
                      <p> Price <span>₵</span>5 </p>
                  </div>
              </div>

              {/* If request doesn't exist */}
              {/*
              <NotFound/>
              <h1> No Request Found </h1>
              <a> Post a request </a>
              */}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
