import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as UserAvatar } from "../../../assets/user.svg";
import { ReactComponent as Clip } from "../../../assets/clip.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <div className='notificationsHeader'>
                  <Close />
                  <h2> Delivery </h2>
              </div>
              <div style={{ marginTop: '1.4rem' }} className='notificationsSelectedAssignment'>
                  <img src='https://picsum.photos/1080/1080' alt='Assignment'/>
                    <div className='notificationsSelectedAssignmentInfo'>
                        <h2> Assignment Title </h2>
                        <p> Lorem ipsum is simply a dummy text of the printing typesetting industry. </p>
                    </div>
              </div>

              <div style={{ textAlign: 'justify' }} className='notificationsField'>
                  <h2> Description: </h2>
                  <p> Lorem ipsum this is a dummy text, that contains a full description of what the seller has delivered. Lorem ipsum this is simply a dummy text of printing & typesetting industry. </p>
              </div>

              <div style={{ marginTop: '1.4rem' }} className='notificationsSelectedAssignment'>
                  <Clip />
                  <div className='notificationsSelectedAssignmentInfo'>
                      <h2> Attachment </h2>
                      <p> 15MB - Zip File </p>
                  </div>
              </div>
              <div style={{ marginTop: '1.4rem' }} className='notificationsSelectedAssignment'>
                  <img style={{ width: '80px' }} src='https://picsum.photos/1080/1080?random=2' alt='Assignment'/>
                  <div className='notificationsSelectedAssignmentInfo'>
                      <h2> Attachment </h2>
                      <p> 12MB - Image File </p>
                  </div>
              </div>

              <div className='notificationsReq'>
                  <button> Accept Delivery </button>
                  <button style={{ background: 'var(--bg)', border: '2px solid var(--primary)', color: 'var(--primary)' }}> Ask for Revision </button>
              </div>

          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
