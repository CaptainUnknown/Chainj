import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Support.scss';

import { ReactComponent as Close } from "../../assets/arrowleft.svg";
const Support: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='settingsWrap'>
              <div className='settingsHeader'>
                  <Close />
                  <h2> Support </h2>
              </div>
              <div className='settingsItem' style={{ marginTop: '25px' }}>
                  <h2> Help & Education </h2>
              </div>
              <div className='settingsItem'>
                  <h2> Leave Feedback </h2>
              </div>
              <div className='settingsItem'>
                  <h2> Forum </h2>
              </div>
              <div className='settingsItem'>
                  <h2> Blog </h2>
              </div>

              { /* Popup */ }
              <div className='notificationsPopupOverlay' style={{ visibility: 'visible' }}></div>
              <div className='notificationsPopup' style={{ visibility: 'visible' }}>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-accent)', borderRadius: 'var(--border-radius)'}}>
                      <h2 style={{ margin: '0' }}> Help us Improve </h2>
                  </div>
                  <img src='https://picsum.photos/1920/1080?random=1' />
                  <h2> What do you think about the Chainj app? </h2>
                  <div className='notificationsPopupOptions'>
                      <h2> Happy </h2>
                  </div>
                  <div className='notificationsPopupOptions'>
                      <h2> Confused </h2>
                  </div>
                  <div className='notificationsPopupOptions'>
                      <h2> Unhappy </h2>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Support;
