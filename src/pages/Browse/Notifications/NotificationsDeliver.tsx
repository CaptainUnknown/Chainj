import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as UserAvatar } from "../../../assets/user.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <div className='notificationsHeader'>
                  <Close />
                  <h2> Deliver</h2>
              </div>
              <div style={{ marginTop: '1.4rem' }} className='notificationsSelectedAssignment'>
                  <img src='https://picsum.photos/1080/1080' alt='Assignment'/>
                    <div className='notificationsSelectedAssignmentInfo'>
                        <h2> Assignment Title </h2>
                        <p> Lorem ipsum is simply a dummy text of the printing typesetting industry. </p>
                    </div>
              </div>

              <div className='notificationsField'>
                  <h2> Add a description to your work: </h2>
              </div>
              <textarea placeholder='Max 300 Characters'></textarea>


              <div className='notificationsReq'>
                  <button> Deliver your work </button>
                  <button> Mark as Done </button>
              </div>


              <button style={{ width: '90%' }} className='notificationSubmit'> Complete </button>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
