import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Notifications.scss';

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as UserAvatar } from "../../../assets/user.svg";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='notificationsWrap'>
              <div className='notificationsHeader'>
                  <Close />
                  <h2> Send an Offer </h2>
              </div>
              <h2 style={{ marginTop: '1.4rem', fontSize: '1.4rem', alignSelf: 'flex-start', marginLeft: '1.5rem' }}> Selected Assignment </h2>

              <div className='notificationsSelectedAssignment'>
                  <img src='https://picsum.photos/1080/1080' alt='Assignment'/>
                    <div className='notificationsSelectedAssignmentInfo'>
                        <h2> Assignment Title </h2>
                        <p> Lorem ipsum is simply a dummy text of the printing typesetting industry. </p>
                    </div>
              </div>


              <div className='notificationsField'>
                  <h2> Define Conditions  </h2>
              </div>
              <select name="interest" id="interest">
                  <option value="volvo">Revisions (Opt)</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>
              <select name="interest" id="interest">
                  <option value="volvo">Delivery Time</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>
              <select name="interest" id="interest">
                  <option value="volvo">Total Amount</option>
                  <option value="saab">$1</option>
                  <option value="mercedes">$2</option>
                  <option value="audi">$5</option>
              </select>

              <div className='notificationsReq'>
                  <h2> Ask for activity requirement </h2>
                  <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider round"></span>
                  </label>
              </div>

              <div className='notificationsField'>
                  <h2> Add a description to your offer: </h2>
              </div>
              <textarea placeholder='Max 300 Characters'></textarea>

              <button className='notificationSubmit'> Send Offer </button>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
