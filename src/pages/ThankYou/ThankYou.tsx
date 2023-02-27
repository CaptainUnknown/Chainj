import { IonContent, IonPage } from '@ionic/react';
import './ThankYou.scss';

import { ReactComponent as ThumbsUp } from "../../assets/thumbsup.svg";

const ThankYou: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='thankYouWrap'>
                    <ThumbsUp />
                    <h1> <span>Thank you</span> for completing this Application. Once your Charity is
                        verified, you will receive an email confirmation that your Charity has become an
                        official VALIDATOR for co-minting CHAINJ with your Volunteers.
                    </h1>
                    <h1>
                        Merci d'avoir rempli cette demande. Une fois votre organisme de bienfaisance vérifié, vous
                        recevrez un e-mail confirmant que votre organisme de bienfaisance est devenu un
                        VALIDATEUR officiel pour co-frapper des pieces CHAINJ avec vos bénévoles.
                    </h1>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ThankYou;
