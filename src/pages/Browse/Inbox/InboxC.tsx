import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Inbox.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Copy } from "../../../assets/copy.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";

const Inbox: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='inboxWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Inbox </h2>
              </div>
              <div className='searchResults'>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=2' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=3' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary-contrast)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=4' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=5' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=6' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=7' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                          <h2> This a dummy text. </h2>
                      </div>
                      <Star style={{ fill: 'var(--primary)'}}/>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
