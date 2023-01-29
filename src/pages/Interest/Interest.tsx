import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
/* Custom CSS */
import './Interest.scss';

import { ReactComponent as GoBack } from "../../assets/uparrow.svg";
import {closeOutline, cutOutline} from "ionicons/icons";

const Interest: React.FC = () => {
  return (
      <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonIcon icon={closeOutline} style={{ width: '50px' }}/>
        </IonToolbar>
      </IonHeader>

        { /* Body */ }
      <IonContent fullscreen>
          <div className='interestWrap'>
              <h1> Choose Service that suits you the best </h1>
              <h2> Choose at least one </h2>
              <div className='interestList'>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=1" + ")" }}>
                      Non-Formal
                  </div>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=2" + ")" }}>
                      Social Action
                  </div>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=3" + ")" }}>
                      Project Based
                  </div>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=4" + ")" }}>
                      Internship
                  </div>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=5" + ")" }}>
                      Voluntarism
                  </div>
                  <div className='interestItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=6" + ")" }}>
                      Online Volunteering
                  </div>
              </div>
              <button> Save </button>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Interest;
