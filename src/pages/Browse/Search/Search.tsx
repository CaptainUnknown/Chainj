import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Sort } from "../../../assets/sort.svg";
import { ReactComponent as Share } from "../../../assets/share.svg";

const Search: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Saved </h2>
                  <Sort style={{ width: '15px', marginLeft: 'auto' }}/>
              </div>
              <div className='saved'>
                  <img src='https://picsum.photos/1920/1080?random=1' alt='searchResult' />
                  <div className='savedInfo'>
                      <div className='savedInfoLeft'>
                          <h2> Activities I love </h2>
                          <p> 5 Activities </p>
                      </div>
                      <Share style={{ width: '25px', marginLeft: 'auto' }}/>
                  </div>
              </div>

              <div className='saved'>
                  <img src='https://picsum.photos/1920/1080?random=2' alt='searchResult' />
                  <div className='savedInfo'>
                      <div className='savedInfoLeft'>
                          <h2> Activities I love more </h2>
                          <p> 6 Activities </p>
                      </div>
                      <Share style={{ width: '25px', marginLeft: 'auto' }}/>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
