import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.scss';

import { ReactComponent as UserAvatar } from "../../../assets/user.svg";
import {useState} from "react";

const Home: React.FC = () => {
    const [balance, setBalance] = useState(40);
  return (
    <IonPage>

      <IonContent fullscreen>
          <div className='profileWrap'>
              <div className='profileHeader'>
                  <UserAvatar />
                  <h2> User Name </h2>
                  <h2 className='profileBalance'> Personal Balance: ¢{balance.toFixed(2)} </h2>
              </div>
              <div className='profileVolunteerMode'>
                  <div className='profileVolunteerModeBox'>
                  </div>
                  <h2> Volunteer Mode </h2>
                  <label className="switch">
                      <input type="checkbox"/>
                          <span className="slider round"></span>
                  </label>
              </div>
              <div className='profileMenu'>
                  <h1> My Chainj </h1>
                  <div className='profileMyChainj'>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Saved Activities </h2>
                      </div>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> My Interest </h2>
                      </div>
                  </div>
                  <div className='profileMyChainj'>
                      <h1> Chainjing </h1>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Manage Assignments </h2>
                      </div>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Post a Request </h2>
                      </div>
                  </div>
                  <div className='profileMyChainj'>
                      <h1> General </h1>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Online Status </h2>
                      </div>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Payments </h2>
                      </div>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Invite Friends </h2>
                      </div>
                      <div className='profileMenuItem'>
                          <div className='profileVolunteerModeBox'>
                          </div>
                          <h2> Support </h2>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
