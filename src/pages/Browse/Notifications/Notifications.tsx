import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as UserAvatar } from "../../../assets/user.svg";
import { ReactComponent as Search } from "../../../assets/search.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <div className='notificationsHeader'>
                  <Close />
                  <h2> Clients Requests </h2>
                  <Search className='notificationsSearch'/>
              </div>
              <div className='notificationsTip'>
                  <div className='notificationsUserInfo'>
                      <UserAvatar />
                      <div className='notificationsUserDetails'>
                          <h3> John Doe </h3>
                          <p> June 2, 2020 </p>
                      </div>
                  </div>
                  <div className='notificationsRequestTitle'> Need someone to edit my photo </div>
                  <div className='notificationsRequestTitle border'>Photoshop Editing / 23 Offers Sent </div>
                  <div className='notificationsRequestDetail'>
                      <div className='fill'></div>
                      <div className='notificationsRequestDetailText'>
                          <h2> Duration </h2>
                          <h2> 2 Days </h2>
                      </div>
                  </div>
                  <div className='notificationsRequestDetail'>
                      <div className='fill'></div>
                      <div className='notificationsRequestDetailText'>
                          <h2> Budget </h2>
                          <h2> $1 </h2>
                      </div>
                  </div>
                  <div className='notificationsRequestDetail'>
                      <div className='fill'></div>
                      <div className='notificationsRequestDetailText'>
                          <h2> Criteria </h2>
                          <h2> Retouching </h2>
                      </div>
                  </div>
              </div>

              <button className='notificationSubmit'> Submit request </button>

              { /* Popup */ }
              <div className='notificationsPopupOverlay' style={{ visibility: 'visible' }}></div>
              <div className='notificationsPopup' style={{ visibility: 'visible' }}>
                  <h2> Filter </h2>
                  <div className='notificationsFilterOptions'>
                      <div className='notificationsFilterOptionItem'>
                          <h2> All </h2>
                          <input type='checkbox' id='notificationsFilterOptionItem1' />
                      </div>
                      <div className='notificationsFilterOptionItem'>
                          <h2> Offered </h2>
                          <input type='checkbox' id='notificationsFilterOptionItem1' />
                      </div>
                      <div className='notificationsFilterOptionItem'>
                          <h2> Accounting </h2>
                          <input type='checkbox' id='notificationsFilterOptionItem1' />
                      </div>
                      <div className='notificationsFilterOptionItem'>
                          <h2> Fund Raising </h2>
                          <input type='checkbox' id='notificationsFilterOptionItem1' />
                      </div>
                  </div>
              </div>

          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
