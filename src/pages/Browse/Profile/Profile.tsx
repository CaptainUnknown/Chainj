import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BarChart,  Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip } from "recharts";
import './Profile.scss';

import { ReactComponent as Back } from "../../../assets/arrowleft.svg";
import {useState} from "react";

const Home: React.FC = () => {
    const data = [
        {name: '1', uv: 400, pv: 2100, amt: 2400},
        {name: '2', uv: 600, pv: 1400, amt: 2400},
        {name: '3', uv: 1200, pv: 2000, amt: 2400},
        {name: '4', uv: 900, pv: 1700, amt: 2400},
        {name: '5', uv: 1000, pv: 2300, amt: 2400},
        {name: '6', uv: 950, pv: 1800, amt: 2400}
    ];
    const [balance, setBalance] = useState(50);
    const [revenues, setRevenues] = useState([50, 50, 50, 50, 50 ]);
    const [analytics, setAnalytics] = useState([120, 50, 120, 50, 50, 50]);

  return (
    <IonPage>

      <IonContent fullscreen>
          <div className='profileWrap'>
              <div className='inboxHeader'>
                  <Back />
                  <h2 style={{ marginBottom: '0', marginLeft: '20px' }}> Earnings </h2>
              </div>
              <h1 style={{ marginTop: '2rem' }}> ¢{balance.toFixed(2)} </h1>
              <h2> Personal Balance </h2>
              <div className='earningsWrap'>
                  <h2> Overview </h2>
                  <h2 style={{ marginLeft: 'auto' }}> May 28 - June 03 </h2>
              </div>

              <div className='graphWrap'>
                  <BarChart
                      width={500}
                      height={300}
                      data={data}
                      margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="pv" fill="#8884d8" />
                      <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
              </div>

              <div className='stats'>
                  <div className='heading'> Analytics </div>
                  <div className='stat'>
                      <h2> Earning from June </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[0].toFixed(2)} </h2>
                  </div>
                  <div className='stat'>
                      <h2> Avg Selling Price </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[1].toFixed(2)} </h2>
                  </div>
                  <div className='stat'>
                      <h2> Earning from June </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[2].toFixed(2)} </h2>
                  </div>
                  <div className='stat'>
                      <h2> Active Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[3].toFixed(2)} </h2>
                  </div>
                  <div className='stat'>
                      <h2> Available for withdrawal </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[4].toFixed(2)} </h2>
                  </div>
                  <div className='stat'>
                      <h2> Completed Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${analytics[5].toFixed(2)} </h2>
                  </div>
                  <div className='heading'> Revenues </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Cancelled Assignments </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${revenues[0].toFixed(2)} </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Pending Clearance </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${revenues[1].toFixed(2)} </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Withdrawn </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${revenues[2].toFixed(2)} </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Used for Purchases </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${revenues[3].toFixed(2)} </h2>
                  </div>
                  <div className='stat' style={{ borderBottom: '2px solid var(--bg-accent)'}}>
                      <h2> Cleared </h2>
                      <h2 style={{ marginLeft: 'auto' }}> ${revenues[4].toFixed(2)} </h2>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
