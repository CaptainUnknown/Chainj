import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Login.scss';

import { ReactComponent as GoBack } from "../../assets/uparrow.svg";

const Login: React.FC = () => {
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
          <div className='welcomeLoginWrap'>
              <GoBack />
              <a> Go Back </a>
              <h1> Welcome Back. </h1>
              <h2> Start Where you left. </h2>

              <div className='loginButtons'>
                    <button> Facebook </button>
                    <button> Google </button>
              </div>

              <div className='loginForm'>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button> Continue </button>
              </div>
              <a className='loginForgot'> Forgot Password? </a>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Login;
