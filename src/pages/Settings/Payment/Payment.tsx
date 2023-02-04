import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Payment.scss';

import { ReactComponent as Close } from "../../../assets/arrowleft.svg";
const Settings: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='settingsWrap'>
                    <div className='settingsHeader'>
                        <Close />
                        <h2> Payments </h2>
                    </div>
                    <div className='settingsItem' style={{ marginTop: '25px' }}>
                        <h2> Exchange $ Chanj </h2>
                    </div>
                    <div className='settingsItem'>
                        <h2> Personal Balance </h2>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Settings;