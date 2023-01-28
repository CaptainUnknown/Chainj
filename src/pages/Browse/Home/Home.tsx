import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='homeWrap'>
              <div className='homeHeader'>
                  <h1> Home </h1>
                  {/* Icon */}
              </div>
              <div className='homeSearch'>
                  { /* Icon */ }
                  <input type='text' placeholder='Search' />
              </div>
              <div className='homePopular'>
                  <div className='homePopularHeader'>
                      <h2> Popular Services </h2>
                      <a href='#'> View All </a>
                  </div>
                  <div className='homePopularList'>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=1" + ")" }}>
                          Formal
                      </div>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=2" + ")" }}>
                          Governance
                      </div>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=3" + ")" }}>
                          Non Profit
                      </div>
                  </div>
              </div>

              <div className='homePopular'>
                  <div className='homePopularHeader'>
                      <h2> Feature Activities </h2>
                      <a href='#'> View All </a>
                  </div>
                  <div className='homePopularList'>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=4" + ")" }}>
                          Formal
                      </div>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=5" + ")" }}>
                          Governance
                      </div>
                      <div className='homePopularItem' style={{ backgroundImage: "url(" + "https://picsum.photos/400/400?random=6" + ")" }}>
                          Non Profit
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
