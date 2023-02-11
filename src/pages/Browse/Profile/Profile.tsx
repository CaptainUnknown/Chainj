import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Profile.scss';

import { ReactComponent as UserAvatar } from "../../../assets/user.svg";
import { ReactComponent as Back } from "../../../assets/arrowleft.svg";

const Home: React.FC = () => {
    const data = [
        {name: '1', uv: 40, pv: 2400, amt: 2400},
        {name: '2', uv: 60, pv: 2400, amt: 2400},
        {name: '3', uv: 120, pv: 2400, amt: 2400},
        {name: '4', uv: 90, pv: 2400, amt: 2400},
        {name: '5', uv: 100, pv: 2400, amt: 2400},
        {name: '6', uv: 95, pv: 2400, amt: 2400}
    ];

  return (
    <IonPage>

      <IonContent fullscreen>
          <div className='profileWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2 style={{ marginBottom: '0', marginLeft: '20px' }}> Earnings </h2>
              </div>
              <h1 style={{ marginTop: '2rem' }}> ¢50 </h1>
              <h2> Personal Balance </h2>
              <div className='earningsWrap'>
                  <h2> Overview </h2>
                  <h2 style={{ marginLeft: 'auto' }}> May 28 - June 03 </h2>
              </div>

              <div className='graphWrap'>
                  <LineChart width={600} height={300} data={data}>
                      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="name" />
                      <YAxis />
                  </LineChart>
              </div>

              <div className='stats'>
                  <div className='heading'> Analytics </div>
                  <div className='stat'>
                      <h2> Earning from June </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $120 </h2>
                  </div>
                  <div className='stat'>
                      <h2> Avg Selling Price </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat'>
                      <h2> Earning from June </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $120 </h2>
                  </div>
                  <div className='stat'>
                      <h2> Active Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat'>
                      <h2> Available for withdrawal </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat'>
                      <h2> Completed Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='heading'> Revenues </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Cancelled Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Pending Clearance </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Withdrawn </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Used for Purchases </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Cleared </h2>
                      <h2 style={{ marginLeft: 'auto' }}> $50 </h2>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
