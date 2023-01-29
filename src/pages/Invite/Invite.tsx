import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Invite.scss';

import { ReactComponent as UserAvatar } from "../../assets/user.svg";
import { ReactComponent as Copy } from "../../assets/copy.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Contacts } from "../../assets/email.svg";

const Invite: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
          <div className='inviteWrap'>
              <div className='profileHeader'>
                  <UserAvatar />
                  <h2> User Name </h2>
                  <h2 className='profileBalance'> Personal Balance: $40 </h2>
              </div>
              <div className='inviteDivider'></div>
              <div className='inviteContent'>
                  <h2> Join Chainj & discover the fastest way to engage a volunteer. </h2>
                  <Copy />
              </div>

              <div className='inviteBottom'>
                  <div className='inviteBottomFacebook'>
                      <Facebook />
                  </div>
                  <div className='inviteBottomTwitter'>
                      <Twitter />
                  </div>
                  <div className='inviteBottomContacts'>
                      <Contacts />
                  </div>
                </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Invite;
