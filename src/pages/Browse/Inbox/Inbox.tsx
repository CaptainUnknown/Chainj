import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Inbox.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Copy } from "../../../assets/copy.svg";
import { ReactComponent as Menu } from "../../../assets/menu.svg";
import {useState} from "react";

const Inbox: React.FC = () => {
    const [friendName, setFriendName] = useState('Friends Name');
    const [lastSeen, setLastSeen] = useState('30 minutes');

    const [inboxItems, setInboxItems] = useState([
        <div className='searchResult'>
            <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
            <div className='searchResultInfo'>
            <h3> Username </h3>
            <h2> This a dummy text. </h2>
            </div>
        </div>
    ]);
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='inboxWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <div className='inboxHeaderLeft'>
                      <h2> {friendName} </h2>
                      <p> Last seen {lastSeen} ago </p>
                  </div>
                  <Copy className='inboxCopy'/>
                  <Menu className='inboxMenu'/>
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
