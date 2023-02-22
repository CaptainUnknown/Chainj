import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Info } from "../../../assets/info.svg";
import {Tabs, TabsProps} from "antd";
import {useState} from "react";

const Search: React.FC = () => {
    const [activeItems, setActiveItems] = useState([
        <div className='notificationItem' style={{ width: '100%' }}>
            <img src='https://picsum.photos/200/200?random=1'/>
            <div className='notificationItemLeft'>
                <h2> Username </h2>
                <h1> Basic Accounting </h1>
                <div className='notificationTag'> In Progress </div>
            </div>
            <div className='notificationItemRight'>
                <p> 1 hour ago </p>
                <p> Price <span>₵</span>5 </p>
            </div>
        </div>
    ]);
    const [newItems, setNewItems] = useState([
        <div className='notificationItem' style={{ width: '100%' }}>
            <img src='https://picsum.photos/200/200?random=1'/>
            <div className='notificationItemLeft'>
                <h2> Username </h2>
                <h1> Basic Accounting </h1>
                <div className='notificationTag'> In Progress </div>
            </div>
            <div className='notificationItemRight'>
                <p> 1 hour ago </p>
                <p> Price <span>₵</span>5 </p>
            </div>
        </div>
    ]);
    const [completedItems, setCompletedItems] = useState([
        <div className='notificationItem' style={{ width: '100%' }}>
            <img src='https://picsum.photos/200/200?random=1'/>
            <div className='notificationItemLeft'>
                <h2> Username </h2>
                <h1> Basic Accounting </h1>
                <div className='notificationTag' style={{ background: 'var(--primary-contrast)', color: 'var(--text-color-contrast)' }}> Completed </div>
            </div>
            <div className='notificationItemRight'>
                <p> 1 hour ago </p>
                <p> Price <span>₵</span>5 </p>
            </div>
        </div>
    ]);
    const [cancelledItems, setCancelledItems] = useState([
        <div className='notificationItem' style={{ width: '100%' }}>
            <img src='https://picsum.photos/200/200?random=1'/>
            <div className='notificationItemLeft'>
                <h2> Username </h2>
                <h1> Basic Accounting </h1>
                <div className='notificationTag'> Cancelled </div>
            </div>
            <div className='notificationItemRight'>
                <p> 1 hour ago </p>
                <p> Price <span>₵</span>5 </p>
            </div>
        </div>
    ]);

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Active (${activeItems.length})`,
            children: <>
                { activeItems.length > 0 ? activeItems : <h2> No active assignments yet </h2> }
            </>,
        },
        {
            key: '2',
            label: `New (${newItems.length})`,
            children: <>
                { newItems.length > 0 ? newItems : <h2> No new assignments yet </h2> }
                </>,
        },
        {
            key: '3',
            label: `Completed (${completedItems.length})`,
            children: <>
                { completedItems.length > 0 ? completedItems : <h2> No completed assignments yet </h2> }
            </>
        },
        {
            key: '4',
            label: `Cancelled (${cancelledItems.length})`,
            children: <>
                { cancelledItems.length > 0 ? cancelledItems : <h2> No cancelled assignments yet </h2> }
            </>
        },
    ];

  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='searchWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2> Manage Sales </h2>
                  <Info style={{ width: '10px', marginLeft: 'auto' }}  />
              </div>
              <Tabs defaultActiveKey="1" items={items} style={{ width: '90%' }} centered={true} />
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
