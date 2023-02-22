import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';
import {useState} from "react";

const Search: React.FC = () => {
    const [historyItems, setHistoryItems] = useState([
        <div className='searchResult'>
            <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
            <div className='searchResultInfo'>
                <h3> Username </h3>
            </div>
        </div>
    ]);
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <div className='searchSelectCategory'>
                  <h2> Activities </h2>
                  <select name="interest" id="interest">
                      <option value="volvo"> Select </option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                  </select>
              </div>
              <div className='searchTitle'>
                  <h3> Recently Viewed Users </h3>
                  <a onClick={() => {
                      setHistoryItems([]);
                      // TODO: Backend Implementation
                  }}> Clear History </a>
              </div>
              <div className='searchResults'>
                  { historyItems }
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
