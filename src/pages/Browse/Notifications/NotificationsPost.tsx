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
                  <h2> Post a Request </h2>
              </div>
              <div className='notificationsTip'>
                  <h2> How to request a service? </h2>
                  <p> Lorem ipsum is simply a dummy text of the printing typesetting industry. </p>
                  <button> Got it </button>
              </div>

              <div className='notificationsField'>
                  <h2> Add a description </h2>
              </div>
              <textarea placeholder='Max 300 Characters'></textarea>

              <div className='notificationsField'>
                  <h2> Choose a category </h2>
              </div>
              <select name="interest" id="interest">
                  <option value="volvo">Category</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>

              <div className='notificationsField'>
                  <h2> When you want your work to be delivered? </h2>
              </div>
              <select name="interest" id="interest">
                  <option value="volvo">Delivery</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>

              <div className='notificationsField'>
                  <h2> What's your budget? (Optional) </h2>
              </div>
              <select name="interest" id="interest">
                  <option value="volvo">Budget</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>

              <button className='notificationSubmit'> Submit request </button>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
