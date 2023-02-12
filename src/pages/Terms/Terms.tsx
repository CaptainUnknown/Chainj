import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Terms.scss';

import { ReactComponent as Back } from "../../assets/arrowleft.svg";
const Terms: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='privacyWrap'>
              <div className='privacyHeader'>
                  <Back />
                  <h2> Privacy Policy </h2>
              </div>
              <div className='privacyContent'>
                  <h2> Chainj's Privacy Policy </h2>
                  <p> Last updated: 1/1/2020 </p>
                  <p> Chainj International Ltd. ("Fiverr", "we", "us" or "our") is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Privacy Policy applies to our website, mobile applications, and other services that link to this Privacy Policy (collectively, the "Services"). </p>
                  <p> Chainj International Ltd. ("Fiverr", "we", "us" or "our") is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Privacy Policy applies to our website, mobile applications, and other services that link to this Privacy Policy (collectively, the "Services"). </p>
                  <p> Chainj International Ltd. ("Fiverr", "we", "us" or "our") is committed to protecting your privacy and developing technology that gives you the most powerful and safe online experience. This Privacy Policy applies to our website, mobile applications, and other services that link to this Privacy Policy (collectively, the "Services"). </p>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Terms;
