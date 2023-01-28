import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Signup.scss';

import { ReactComponent as GoBack } from "../../assets/uparrow.svg";

import {ReactComponent as Facebook} from "../../assets/facebook.svg";
import {ReactComponent as Google} from "../../assets/google.svg";
import {ReactComponent as Email} from "../../assets/email.svg";

const Signup: React.FC = () => {
  return (
      <IonPage>

      { /* Header:
      <IonHeader>
        <IonToolbar>
          <IonTitle> Chainj login </IonTitle>
        </IonToolbar>
      </IonHeader>
      */ }

        { /* Body */ }
      <IonContent fullscreen>
          <div className='signupWrap'>
              <GoBack />
              <a> Go Back </a>
              <h1> Join Chainj. </h1>
              <p> Lorem Ipsum is simply a dummy text with something about printing & typesetting industry. </p>

              <div className='signupContinueButtonFacebook'>
                  <Facebook />
                  Continue with Facebook
              </div>
              <div className='signupContinueButtonGoogle'>
                  <Google />
                  Continue with Google
              </div>
              <div className='signupContinueButtonEmail'>
                  <Email />
                  Continue with Email
              </div>

              <p className='signupPolicy'> By creating an account you agree to</p>
              <p className='signupPolicy'> our Terms Of Services & Privacy Policy </p>

              <div className='signupAlt'>
                  <a>Sign In</a>
                  <a>Skip</a>
              </div>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Signup;
