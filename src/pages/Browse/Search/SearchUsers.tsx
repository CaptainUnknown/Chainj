import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <div className='searchSelectCategory'>
                  <h2> Activities </h2>
                  <select name="interest" id="interest">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='searchTitle'>
                  <h3> Recently Viewed Users </h3>
                  <a> Clear History </a>
              </div>
              <div className='searchResults'>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=2' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=3' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=4' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Username </h3>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
