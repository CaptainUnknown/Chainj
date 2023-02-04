import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.scss';

import { ReactComponent as Back } from "../../assets/arrowleft.svg";
const Payment: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='settingsWrap'>
                    <div className='settingsHeader'>
                        <Back />
                        <h2> Settings </h2>
                    </div>
                    <div className='settingsItem' style={{ marginTop: '25px' }}>
                        <h2> Notifications </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Notifications sound </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Security </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Terms of Service </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Privacy Policy </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Language </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Logout </h2>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Payment;
