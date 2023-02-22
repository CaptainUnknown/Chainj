import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Inbox.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Copy } from "../../../assets/copy.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";
import { ReactComponent as Star } from "../../../assets/star.svg";
import {useState} from "react";

const Inbox: React.FC = () => {
    const [inboxItems, setInboxItems] = useState([
        <div className='searchResult'>
            <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
            <div className='searchResultInfo'>
                <h3> Username </h3>
                <h2> This a dummy text. </h2>
            </div>
            <Star style={{ fill: 'var(--primary)'}}/>
        </div>,
    ]);
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='inboxWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Inbox </h2>
              </div>
              <div className='searchResults'>
                  { inboxItems }
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;
