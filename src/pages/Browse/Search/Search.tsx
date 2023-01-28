import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <h1> Categories </h1>
              <div className='searchSelectCategory'>
                  <h2> Categories </h2>
                  <select name="interest" id="interest">
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='searchTitle'>
                  <h2> Your Interest </h2>
                  <h3> Lorem Ipsum is simply dummy </h3>
              </div>
              <button> You may also like </button>
              <h3 className='searchLike'> You may also like </h3>

              <div className='searchResults'>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Basic Accounting </h3>
                          <p> Lorem Ipsum is simply dummy </p>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=2' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Fund Raising </h3>
                          <p> Lorem Ipsum is simply dummy </p>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=3' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Web Design </h3>
                          <p> Lorem Ipsum is simply dummy </p>
                      </div>
                  </div>
                  <div className='searchResult'>
                      <img src='https://picsum.photos/200/200?random=4' alt='searchResult' />
                      <div className='searchResultInfo'>
                          <h3> Photography </h3>
                          <p> Lorem Ipsum is simply dummy </p>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
