import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Inbox.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";

const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='inboxWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <div className='inboxHeaderLeft'>
                      <h2> Buyer Name </h2>
                      <p> Last seen 30 minutes ago </p>
                  </div>
              </div>
              <div className='searchResults'>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=2' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=3' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=4' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=5' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=6' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=7' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
