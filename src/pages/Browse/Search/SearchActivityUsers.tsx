import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';
import {Tabs, TabsProps} from "antd";

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import {useState} from "react";

const Search: React.FC = () => {
    const [activities, setActivities] = useState([
        <div className='searchResult'>
            <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
            <div className='searchResultInfo'>
                <h3> Basic Accounting </h3>
                <p> Lorem Ipsum is simply dummy </p>
            </div>
        </div>,
    ]);
    const [users, setUsers] = useState([
        <div className='searchResult'>
            <div className='searchResultInfo'>
                <img src='https://picsum.photos/200/200?random=1' alt='searchResult' />
                <h3> Username </h3>
            </div>
        </div>,
    ]);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Activities`,
            children: <>
                <div className='searchTitle'>
                    <h2> Search Categories </h2>
                </div>
                <div className='searchResults'>
                    { activities }
                </div>
            </>,
        },
        {
            key: '2',
            label: `Users`,
            children: <>
                <div className='searchTitleUser'>
                    <h3> Recently Viewed Users </h3>
                    <a> Clear History </a>
                </div>
                <div className='searchResultsUser'>
                    { users }
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
                  <h2> Search... </h2>
                  <SearchIcon style={{ marginLeft: 'auto' }}/>
              </div>
              <Tabs defaultActiveKey="1" items={items} style={{ width: '90%' }} centered={true} />
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
