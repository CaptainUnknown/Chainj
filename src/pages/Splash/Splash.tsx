import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Splash.scss';

import { ReactComponent as Play } from "../../assets/play.svg";

const Splash: React.FC = () => {
  return (
      <IonPage>

          { /* Body */ }
      <IonContent fullscreen>
          <div className='splashWrap'>
              <div className='splashVideo' style={{ backgroundImage: "url(" + "https://picsum.photos/800/800?random=3" + ")"}}>
                  <Play />
              </div>

              <div className='splashBlocks'>
                  <div className='splashBlock' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=1" + ")", marginRight: '1rem' }}>
                      Find a Service
                  </div>
                  <div className='splashBlock' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=2" + ")", marginLeft: '1rem' }}>
                      Become <br/> Volunteer
                  </div>
              </div>

              <div className='splashSignSkip'>
                  <a>Sign In</a>
                  <a>Skip</a>
              </div>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Splash;
