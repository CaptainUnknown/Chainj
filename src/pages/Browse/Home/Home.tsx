import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.scss';

import { ReactComponent as Close } from "../../../assets/close.svg";
import { ReactComponent as User } from "../../../assets/user.svg";
import { ReactComponent as Info } from "../../../assets/info.svg";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='homeWrap'>
              <div className='inboxHeader'>
                  <h2 style={{ marginLeft: '20px' }}> UserName </h2>
                  <User style={{ width: '40px', marginLeft: 'auto' }}/>
              </div>
              <div className='homeTop'>
                  <div>
                      <h2> Standards to maintain </h2>
                      <Info style={{ marginLeft: 'auto' }} />
                  </div>
                  <div>
                      <h2> Volunteer Level </h2>
                      <h2 style={{ marginLeft: 'auto' }} > No Level </h2>
                  </div>
                  <div>
                      <h2> Volunteer Level </h2>
                      <h2 style={{ marginLeft: 'auto' }} > No Level </h2>
                  </div>
                  <div>
                      <h2> Volunteer Level </h2>
                      <h2 style={{ marginLeft: 'auto' }} > No Level </h2>
                  </div>

                  <div style={{ marginTop: '20px', justifyContent: 'space-around' }}>
                      <div style={{ flexDirection: 'column' }}>
                          <div className='chart'>
                              <div className='chartFill'>100%</div>
                          </div>
                          <h2 style={{ fontSize: '0.7rem' }}> Response Rate </h2>
                      </div>
                      <div style={{ flexDirection: 'column' }}>
                          <div className='chart'>
                              <div className='chartFill'>100%</div>
                          </div>
                          <h2 style={{ fontSize: '0.7rem' }}> Response Rate </h2>
                      </div>
                      <div style={{ flexDirection: 'column' }}>
                          <div className='chart'>
                              <div className='chartFill'>100%</div>
                          </div>
                          <h2 style={{ fontSize: '0.7rem' }}> Response Rate </h2>
                      </div>
                      <div style={{ flexDirection: 'column' }}>
                          <div className='chart'>
                              <div className='chartFill'>100%</div>
                          </div>
                          <h2 style={{ fontSize: '0.7rem' }}> Response Rate </h2>
                      </div>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                      <h2> Next Level Requirements </h2>
                      <Info style={{ marginLeft: 'auto' }} />
                  </div>
              </div>

              <div className='homeBottom'>
                  <div style={{ marginTop: '10px' }}>
                      <h2> Earnings </h2>
                      <a style={{ marginLeft: 'auto' }} > View Details </a>
                  </div>

                  <div className='earning'>
                      <div style={{ flexDirection: 'column', textAlign: 'left', marginBottom: '0' }}>
                          <div style={{ flexDirection: 'column' }}><p> Personal Balance:</p><p> ¢0.00 </p></div>
                          <div style={{ flexDirection: 'column', marginBottom: '0' }}><p> Available to Withdraw:</p><p> ¢0.00 </p></div>
                      </div>
                      <div style={{ flexDirection: 'column', marginLeft: 'auto', textAlign: 'right', marginBottom: '0' }}>
                          <div style={{ flexDirection: 'column' }}><p> Earned in June:</p><p> ¢0.00 </p></div>
                          <div style={{ flexDirection: 'column', marginBottom: '0' }}><p> Earned in July:</p><p> ¢0.00 </p></div>
                      </div>
                  </div>

                  <div style={{ marginTop: '10px' }}>
                      <h2> To-Dos </h2>
                  </div>

                  <div className='earning' style={{ flexDirection: 'column' }}>
                      <div style={{ flexDirection: 'column', textAlign: 'left', marginBottom: '20px' }}>
                          <div style={{ flexDirection: 'column', marginBottom: '0', fontWeight: '400' }}> No Unread Message </div>
                          <div className='notification'>
                              <p style={{ width: '85%' }}> Lorem Ipsum is simply a dummy text of the printing & typesetting industry. </p>
                              <div className='fill'> 0 </div>
                          </div>
                      </div>
                      <div style={{ flexDirection: 'column', textAlign: 'left', marginBottom: '0' }}>
                          <div style={{ flexDirection: 'column', marginBottom: '0', fontWeight: '400' }}> No Unread Message </div>
                          <div className='notification'>
                              <p style={{ width: '85%' }}> Lorem Ipsum is simply a dummy text of the printing & typesetting industry. </p>
                              <div className='fill'> 0 </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
