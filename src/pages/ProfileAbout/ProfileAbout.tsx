import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './ProfileAbout.scss';
import { Tabs, TabsProps  } from 'antd';
import { ReactComponent as Close } from "../../assets/close.svg";

import { ReactComponent as UserAvatar } from "../../assets/user.svg";
import { ReactComponent as Star } from "../../assets/star.svg";

const ProfileAbout: React.FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `About`,
            children: <>
                <div className='aboutWrap'>
                    <div className='aboutUserInfo'>
                        <UserAvatar />
                        <div className='aboutUserInfoText'>
                            <h2> John Doe </h2>
                            <div className='aboutUserInfoTextRating'>
                                <Star />
                                <p> 5.0 (23) </p>
                            </div>
                        </div>
                    </div>
                    <h2> User Information </h2>
                    <div className='aboutUserInfoDetails'>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> From </h2>
                                <p> New York, NY </p>
                            </div>
                        </div>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> Member Since </h2>
                                <p> Feb, 2018 </p>
                            </div>
                        </div>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> Avg Response time </h2>
                                <p> 1 hour </p>
                            </div>
                        </div>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> Recent Delivery </h2>
                                <p> About 1 day </p>
                            </div>
                        </div>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> Last Active </h2>
                                <p> Online </p>
                            </div>
                        </div>
                    </div>

                    <h2> Languages </h2>
                    <div className='aboutUserInfoDetails'>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> English </h2>
                                <p> Native </p>
                            </div>
                        </div>
                        <div className='aboutUserInfoDetailsItem'>
                            <div className='fill'></div>
                            <div className='aboutUserInfoDetailsItemText'>
                                <h2> Spanish </h2>
                                <p> Fluent </p>
                            </div>
                        </div>
                    </div>

                    <h2> Description </h2>
                    <div className='aboutUserInfoDetails'>
                        <div className='aboutUserInfoDetailsItem'>
                            <h2> Lorem Ipsum here is the simple dummy text of the printing & typesetting industry </h2>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'flex-start', marginBottom: '15px' }}>
                        <div className='fill'></div>
                        <h2 style={{ marginBottom: '0' }}> Skill Test </h2>
                    </div>
                    <div className='aboutUserInfoDetails'>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h2> English </h2>
                            <h2 style={{ marginLeft: '100px' }}> 7.5/10 </h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h2> English </h2>
                            <h2 style={{ marginLeft: '100px' }}> 7.5/10 </h2>
                        </div>
                    </div>


                </div>
            </>,
        },
        {
            key: '2',
            label: `Activities`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Reviews`,
            children: <>
                <div className='aboutRating'>
                    <div className='aboutRatingItem' style={{ marginBottom: '25px' }}>
                        <h1> Volunteer Communication </h1>
                        <Star />
                        <h1> 5.0 </h1>
                    </div>
                    <div className='aboutRatingItem'>
                        <h2> Volunteer Communication </h2>
                        <Star />
                        <h2> 5.0 </h2>
                    </div>
                    <div className='aboutRatingItem'>
                        <h2> User Information </h2>
                        <Star />
                        <h2> 5.0 </h2>
                    </div>
                    <div className='aboutRatingItem' style={{ marginBottom: '20px' }}>
                        <h2> User Information </h2>
                        <Star />
                        <h2> 5.0 </h2>
                    </div>
                </div>
                <div className='aboutRating'>
                    <h1> Sorted by most relevant </h1>
                    <div className='aboutReview'>
                        <UserAvatar />
                        <div className='aboutReviewText'>
                            <h2> John Doe </h2>
                            <h2 style={{ fontSize: '1.0rem' }}> 🍁 Canada </h2>
                            <p> Lorem ipsum is simply a dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '120px'}}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Star className='aboutRatingStar'/>
                                <h2 style={{ fontSize: '0.8rem' }}> 5.0 (23)</h2>
                            </div>
                            <h2 style={{ fontSize: '0.8rem', marginLeft: 'auto' }}> 1 day ago </h2>
                        </div>
                    </div>
                    <div className='aboutReview'>
                        <UserAvatar />
                        <div className='aboutReviewText'>
                            <h2> John Doe </h2>
                            <h2 style={{ fontSize: '1.0rem' }}> 🍁 Canada </h2>
                            <p> Lorem ipsum is simply a dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '120px'}}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Star className='aboutRatingStar'/>
                                <h2 style={{ fontSize: '0.8rem' }}> 5.0 (23)</h2>
                            </div>
                            <h2 style={{ fontSize: '0.8rem', marginLeft: 'auto' }}> 1 day ago </h2>
                        </div>
                    </div>
                    <div className='aboutReview'>
                        <UserAvatar />
                        <div className='aboutReviewText'>
                            <h2> John Doe </h2>
                            <h2 style={{ fontSize: '1.0rem' }}> 🍁 Canada </h2>
                            <p> Lorem ipsum is simply a dummy text of the printing and typesetting industry. </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '120px'}}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Star className='aboutRatingStar'/>
                                <h2 style={{ fontSize: '0.8rem' }}> 5.0 (23)</h2>
                            </div>
                            <h2 style={{ fontSize: '0.8rem', marginLeft: 'auto' }}> 1 day ago </h2>
                        </div>
                    </div>
                </div>
            </>
        },
    ];
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='aboutWrap'>
              <div className='aboutHeader'>
                  <Close />
                  <h2> About </h2>
              </div>
              <Tabs defaultActiveKey="1" items={items} style={{ width: '90%' }} centered={true} />
          </div>
      </IonContent>
    </IonPage>
  );
};

export default ProfileAbout;
