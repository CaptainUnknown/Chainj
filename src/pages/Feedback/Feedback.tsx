import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Feedback.scss';

import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Back } from "../../assets/arrowleft.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Email } from "../../assets/email.svg";

const Feedback: React.FC = () => {
  return (
      <IonPage>

        { /* Body */ }
      <IonContent fullscreen>
          <div className='promoteWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Feedback </h2>
              </div>
              <h2 style={{ marginLeft: '2rem', marginTop: '2rem' }}> Help us Improve </h2>
              <h2 style={{ marginLeft: '2rem', fontSize: '0.9rem' }}> Lorem ipsum Dummy text </h2>

              <div className='promoteGig'>
                  <Star />
                  <h2> Rate on App Store </h2>
              </div>

              <div className='promoteList'>
                  <div className='promoteListItem'>
                      <Twitter />
                      <h2> Tweet about Chanj </h2>
                  </div>
                  <div className='promoteListItem'>
                      <Facebook />
                      <h2> Share on Facebook </h2>
                  </div>
                  <div className='promoteListItem'>
                      <Email />
                      <h2> Contact on Chainj Team </h2>
                  </div>
              </div>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Feedback;
