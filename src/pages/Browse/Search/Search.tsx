import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';
import {Tabs, TabsProps} from "antd";

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";

const Search: React.FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Categories`,
            children: <>
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
            </>,
        },
        {
            key: '2',
            label: `Interests`,
            children: <>
                <div className='searchTitleUser'>
                    <h3> Recently Viewed Users </h3>
                    <a> Clear History </a>
                </div>
                <div className='searchResultsUser'>
                    <div className='searchResult'>
                        <div className='searchResultInfo'>
                            <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                            <h3> Username </h3>
                        </div>
                    </div>
                    <div className='searchResult'>
                        <div className='searchResultInfo'>
                            <img src='https://picsum.photos/200/200?random=2' alt='searchResult' />
                            <h3> Username </h3>
                        </div>
                    </div>
                    <div className='searchResult'>
                        <div className='searchResultInfo'>
                            <img src='https://picsum.photos/200/200?random=3' alt='searchResult' />
                            <h3> Username </h3>
                        </div>
                    </div>
                    <div className='searchResult'>
                        <div className='searchResultInfo'>
                            <img src='https://picsum.photos/200/200?random=4' alt='searchResult' />
                            <h3> Username </h3>
                        </div>
                    </div>
                </div>
            </>,
        },
    ];
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Categories </h2>
              </div>
              <div className='searchSelectCategory'>
                  <h2> Categories </h2>
                  <SearchIcon />
              </div>
              <Tabs defaultActiveKey="1" items={items} style={{ width: '90%' }} centered={true} />
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
