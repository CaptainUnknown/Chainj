import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Search.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import { ReactComponent as Info } from "../../../assets/info.svg";
import {Tabs, TabsProps} from "antd";

const Search: React.FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `Active`,
            children: <>
                <h2> No Currently active assignments yet </h2>
            </>,
        },
        {
            key: '2',
            label: `New`,
            children: <>
                <div className='notificationItem'>
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
                </>,
        },
        {
            key: '3',
            label: `Completed`,
            children: <>
                <div className='notificationItem'>
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
                <div className='notificationItem'>
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
            </>
        },
        {
            key: '4',
            label: `Cancelled`,
            children: <>
                <div className='notificationItem'>
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
