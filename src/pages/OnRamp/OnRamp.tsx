import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './OnRamp.scss';
const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='onRampWrap'>
              <div className='onRampHeader'>
                  <h2> Verification </h2>
              </div>
              <div className='searchResults'>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
