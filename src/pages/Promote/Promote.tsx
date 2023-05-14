import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
/* Custom CSS */
import './Promote.scss';

import { ReactComponent as Star } from "../../assets/star.svg";

const Promote: React.FC = () => {
  return (
      <IonPage>
          { /* Header: */ }
      <IonHeader>
        <IonToolbar>
          <IonTitle> Promote my Skills </IonTitle>
        </IonToolbar>
      </IonHeader>

        { /* Body */ }
      <IonContent fullscreen>
          <div className='gigPromoteWrap'>
              <h2 className='title'> Your jobs are ready? </h2>
              <h2 className='tag'> Promote it through your social network </h2>

              <div className='promoteSelect'>
                  <h2> Selected Assignments </h2>
                  <a> Change </a>
              </div>

              <div className='promoteGig'>
                  <img src='https://picsum.photos/400/400?random=1'/>
                  <div className='promoteGigInfo'>
                      <div className='promoteGigInfoTop'>
                            <Star />
                            <h2> 5.0 (3) </h2>
                      </div>
                      <h2> Gig Title </h2>
                  </div>
              </div>

              <div className='promoteList'>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Share with Friends </h2>
                  </div>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Tweet to followers </h2>
                  </div>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Post to your connections </h2>
                  </div>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Send to colleagues </h2>
                  </div>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Send to your contacts </h2>
                  </div>
                  <div className='promoteListItem'>
                      <div className='promoteBox'>
                      </div>
                      <h2> Others </h2>
                  </div>
              </div>
          </div>
      </IonContent>

    </IonPage>
  );
};

export default Promote;
