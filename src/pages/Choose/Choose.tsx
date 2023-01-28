import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Choose.scss';

import { ReactComponent as GoBack } from "../../assets/uparrow.svg";

const Choose: React.FC = () => {
  return (
      <IonPage>

        { /* Body */ }
      <IonContent fullscreen>
          <div className='loginWrap'>
              <GoBack />
              <a> Go Back </a>
              <h1> Choose Service that suits you best. </h1>
              <div className='chooseGrid'>
                  <div className='chooseOption' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=1" + ")" }}>
                      Formal
                  </div>
                  <div className='chooseOption' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=2" + ")" }}>
                      Non-Formal
                  </div>
                  <div className='chooseOption' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=3" + ")" }}>
                      Social Action
                  </div>
                  <div className='chooseOption' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=4" + ")" }}>
                      Project Based
                  </div>
              </div>
              <button> Skip </button>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Choose;
