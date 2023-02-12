import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './SelectCategory.scss';
import { useState } from 'react';

import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Info } from "../../assets/info.svg";

const SelectCategory: React.FC = () => {
    const [menu, setMenu] = useState(0);

  return (
    <IonPage>
      <IonContent fullscreen>
          <div className='selectCategoryWrap'>
              <div className='inboxHeader'>
                  <Close style={{ width: '20px', marginRight: '20px' }}/>
                  <h2> Select a Category: </h2>
              </div>
              <div className='homeTop'>
                  <button onClick={() => {setMenu(1)} } style={{ marginTop: '0' }}><h2> MICRO VOLUNTEERING </h2></button>
                  <div style={{ display: ((menu == 1) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Consumer Activism </a>
                      </div>
                      <div className='option'>
                          <a> Crowdfunding </a>
                      </div>
                      <div className='option'>
                          <a> Crowdsourcing </a>
                      </div>
                      <div className='option'>
                          <a> DIY Fundraising </a>
                      </div>
                      <div className='option'>
                          <a> Donations in Kind </a>
                      </div>
                      <div className='option'>
                          <a> Micro-Donation </a>
                      </div>
                      <div className='option'>
                          <a> Micro-lnfluencer Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Micro Volunteering </a>
                      </div>
                      <div className='option'>
                          <a> Slacktivism </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(2)} }><h2> ONLINE VOLUNTEERING </h2></button>
                  <div style={{ display: ((menu == 2) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Curator </a>
                      </div>
                      <div className='option'>
                          <a> Data Visualisation </a>
                      </div>
                      <div className='option'>
                          <a> Differential Advantage </a>
                      </div>
                      <div className='option'>
                          <a> DIY Fundraising </a>
                      </div>
                      <div className='option'>
                          <a> Differentiation </a>
                      </div>
                      <div className='option'>
                          <a> Digital </a>
                      </div>
                      <div className='option'>
                          <a> Digital Storytelling </a>
                      </div>
                      <div className='option'>
                          <a> Editorial Calendar </a>
                      </div>
                      <div className='option'>
                          <a> Editorial Coverage </a>
                      </div>
                      <div className='option'>
                          <a> Editorial Guidelines </a>
                      </div>
                      <div className='option'>
                          <a> Ephemeral Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Facebook Fundraisers </a>
                      </div>
                      <div className='option'>
                          <a> Foundation Funding </a>
                      </div>
                      <div className='option'>
                          <a> Friendraising </a>
                      </div>
                      <div className='option'>
                          <a> Gamification </a>
                      </div>
                      <div className='option'>
                          <a> Giving Platform </a>
                      </div>
                      <div className='option'>
                          <a> mCommerce </a>
                      </div>
                      <div className='option'>
                          <a> Smart Content </a>
                      </div>
                      <div className='option'>
                          <a> Snackable Content </a>
                      </div>
                      <div className='option'>
                          <a> Snackable Content </a>
                      </div>
                      <div className='option'>
                          <a> Social Giving </a>
                      </div>
                      <div className='option'>
                          <a> Social Good </a>
                      </div>
                      <div className='option'>
                          <a> Social Media </a>
                      </div>
                      <div className='option'>
                          <a> Social Media Optimisation </a>
                      </div>
                      <div className='option'>
                          <a> Social Networking </a>
                      </div>
                      <div className='option'>
                          <a> Social Proof </a>
                      </div>
                      <div className='option'>
                          <a> Social Return on Investment (SROI) </a>
                      </div>
                      <div className='option'>
                          <a> Third Party Online Giving Platform </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(3)} }><h2> VOLUNTOURISM </h2></button>
                  <div style={{ display: ((menu == 3) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Disaster Philanthropy Plan </a>
                      </div>
                      <div className='option'>
                          <a> Fair Trade </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                  </div>



                  <button onClick={() => {setMenu(4)} }><h2> INTERNSHIP </h2></button>
                  <div style={{ display: ((menu == 4) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Customer Journey </a>
                      </div>
                      <div className='option'>
                          <a> Millennials </a>
                      </div>
                      <div className='option'>
                          <a> Pinup </a>
                      </div>
                      <div className='option'>
                          <a> Register Campaign </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>

                  <button onClick={() => {setMenu(5)} }><h2> INTERNSHIP </h2></button>
                  <div style={{ display: ((menu == 5) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> B-Corp </a>
                      </div>
                      <div className='option'>
                          <a> B Lab </a>
                      </div>
                      <div className='option'>
                          <a> Buy One Give One (BOGO) </a>
                      </div>
                      <div className='option'>
                          <a> Campaign </a>
                      </div>
                      <div className='option'>
                          <a> Category Exclusivity </a>
                      </div>
                      <div className='option'>
                          <a> Cause Alliance </a>
                      </div>
                      <div className='option'>
                          <a> Cause Alliance Campaign </a>
                      </div>
                      <div className='option'>
                          <a> Cause Branding </a>
                      </div>
                      <div className='option'>
                          <a> Cause Licensing </a>
                      </div>
                      <div className='option'>
                          <a> Cause Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Cause Promotion </a>
                      </div>
                      <div className='option'>
                          <a> Cause-Related Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Consultative Selling </a>
                      </div>
                      <div className='option'>
                          <a> Content Curation </a>
                      </div>
                      <div className='option'>
                          <a> Content Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Content Strategy </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Philanthropy </a>
                      </div>
                      <div className='option'>
                          <a> Cross-Promotions </a>
                      </div>
                      <div className='option'>
                          <a> Customer Loyalty </a>
                      </div>
                      <div className='option'>
                          <a> Customer Relationship Management (CRM) </a>
                      </div>
                      <div className='option'>
                          <a> Editorial Calendar </a>
                      </div>
                      <div className='option'>
                          <a> Event Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Halo Effect </a>
                      </div>
                      <div className='option'>
                          <a> Media Sponsor </a>
                      </div>
                      <div className='option'>
                          <a> Omnichannel </a>
                      </div>
                      <div className='option'>
                          <a> One for One </a>
                      </div>
                      <div className='option'>
                          <a> Responsible Business Practices </a>
                      </div>
                      <div className='option'>
                          <a> Skills-based Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Smarketing </a>
                      </div>
                      <div className='option'>
                          <a> Social Impact Partnerships </a>
                      </div>
                      <div className='option'>
                          <a> Social Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Tangible Marketing Benefits </a>
                      </div>
                      <div className='option'>
                          <a> Transactional Cause Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Transparency </a>
                      </div>
                      <div className='option'>
                          <a> Turn-Key Programs </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(6)} }><h2> SOCIAL ACTION </h2></button>
                  <div style={{ display: ((menu == 6) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Activism </a>
                      </div>
                      <div className='option'>
                          <a> Anti-Astroturfing </a>
                      </div>
                      <div className='option'>
                          <a> Cause Washing </a>
                      </div>
                      <div className='option'>
                          <a> Civic Media </a>
                      </div>
                      <div className='option'>
                          <a> Collective Impact </a>
                      </div>
                      <div className='option'>
                          <a> Creative Disruption </a>
                      </div>
                      <div className='option'>
                          <a> Customised Programs </a>
                      </div>Differentiator
                      <div className='option'>
                          <a> Differentiator </a>
                      </div>
                      <div className='option'>
                          <a> DIY Fundraising </a>
                      </div>
                      <div className='option'>
                          <a> Double Bottom Line </a>
                      </div>
                      <div className='option'>
                          <a> Employee Activism </a>
                      </div>
                      <div className='option'>
                          <a> Employee Engagement </a>
                      </div>
                      <div className='option'>
                          <a> Good Washing </a>
                      </div>
                      <div className='option'>
                          <a> Grassroots Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Impact Reporting </a>
                      </div>
                      <div className='option'>
                          <a> Impact Washing </a>
                      </div>
                      <div className='option'>
                          <a> Marginal Social Cost </a>
                      </div>
                      <div className='option'>
                          <a> Matching Gifts </a>
                      </div>
                      <div className='option'>
                          <a> Newsjacking </a>
                      </div>
                      <div className='option'>
                          <a> Niche Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Peer-to-Peer Fundraising (P2P) </a>
                      </div>
                      <div className='option'>
                          <a> Personal Fundraising Page </a>
                      </div>
                      <div className='option'>
                          <a> Pro Social </a>
                      </div>
                      <div className='option'>
                          <a> Shared Responsibility </a>
                      </div>
                      <div className='option'>
                          <a> Social Capital </a>
                      </div>
                      <div className='option'>
                          <a> Social Causes </a>
                      </div>
                      <div className='option'>
                          <a> Social Change </a>
                      </div>
                      <div className='option'>
                          <a> Storytelling </a>
                      </div>
                      <div className='option'>
                          <a> Storytelling as Currency </a>
                      </div>
                      <div className='option'>
                          <a> Superficial Cause Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Wrap-Around Event </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(7)} }><h2> INFORMAL </h2></button>
                  <div style={{ display: ((menu == 7) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Leading Experiences </a>
                      </div>
                      <div className='option'>
                          <a> Authenticity </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(8)} }><h2> NON-FORMAL </h2></button>
                  <div style={{ display: ((menu == 8) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Community Investment </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>


                  <button onClick={() => {setMenu(9)} }><h2> GOVERNANCE </h2></button>
                  <div style={{ display: ((menu == 9) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Advocacy </a>
                      </div>
                      <div className='option'>
                          <a> Awareness </a>
                      </div>
                      <div className='option'>
                          <a> Awareness-Raising Partners </a>
                      </div>
                      <div className='option'>
                          <a> Branding </a>
                      </div>
                      <div className='option'>
                          <a> Brand Authenticity </a>
                      </div>
                      <div className='option'>
                          <a> Brand Image </a>
                      </div>
                      <div className='option'>
                          <a> Brand Personality </a>
                      </div>
                      <div className='option'>
                          <a> Brand Philanthropy </a>
                      </div>
                      <div className='option'>
                          <a> Brand Purpose </a>
                      </div>
                      <div className='option'>
                          <a> Branded Partnership </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Community Partners </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Contributions </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Donation Section </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Foundation Grants </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Funding </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Fundraising </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Identity </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Relations </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Social Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Social Responsibility or CSR </a>
                      </div>
                      <div className='option'>
                          <a> Cost / Benefit Ratio </a>
                      </div>
                      <div className='option'>
                          <a> Demographics </a>
                      </div>
                      <div className='option'>
                          <a> Evergreen Content </a>
                      </div>
                      <div className='option'>
                          <a> Fulfillment </a>
                      </div>
                      <div className='option'>
                          <a> Internal Brand Engagement </a>
                      </div>
                      <div className='option'>
                          <a> Matching Grant </a>
                      </div>
                      <div className='option'>
                          <a> NGO </a>
                      </div>
                      <div className='option'>
                          <a> Positioning Statement </a>
                      </div>
                      <div className='option'>
                          <a> Premiums </a>
                      </div>
                      <div className='option'>
                          <a> Presenting Sponsor </a>
                      </div>
                      <div className='option'>
                          <a> Primary Sponsor </a>
                      </div>
                      <div className='option'>
                          <a> Product Proceeds Program </a>
                      </div>
                      <div className='option'>
                          <a> Promotional Partnership </a>
                      </div>
                      <div className='option'>
                          <a> Property </a>
                      </div>
                      <div className='option'>
                          <a> Psychographics </a>
                      </div>
                      <div className='option'>
                          <a> Share of Mind </a>
                      </div>
                      <div className='option'>
                          <a> Share of Voice </a>
                      </div>
                      <div className='option'>
                          <a> Share of Wallet </a>
                      </div>
                      <div className='option'>
                          <a> Shared Value </a>
                      </div>
                      <div className='option'>
                          <a> Signage </a>
                      </div>
                      <div className='option'>
                          <a> Social Enterprise </a>
                      </div>
                      <div className='option'>
                          <a> Social Entrepreneurship </a>
                      </div>
                      <div className='option'>
                          <a> Strategic Gift-ln-Kind </a>
                      </div>
                      <div className='option'>
                          <a> Strategic Partnership </a>
                      </div>
                      <div className='option'>
                          <a> Strategic Philanthropy </a>
                      </div>
                      <div className='option'>
                          <a> Transformative Cause Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Unique Selling Proposition (USP) </a>
                      </div>
                      <div className='option'>
                          <a> Upcycling </a>
                      </div>
                      <div className='option'>
                          <a> Valuation </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>

                  <button onClick={() => {setMenu(10)} }><h2> FORMAL </h2></button>
                  <div style={{ display: ((menu == 10) ? "flex" : "none"), flexDirection: 'column' }}>
                      <div className='option'>
                          <a> Activation </a>
                      </div>
                      <div className='option'>
                          <a> Client Entertainment / Hospitality </a>
                      </div>
                      <div className='option'>
                          <a> Commercial Co-Venture </a>
                      </div>
                      <div className='option'>
                          <a> Commercial Co-Venturer </a>
                      </div>
                      <div className='option'>
                          <a> Community Affairs / Relations </a>
                      </div>
                      <div className='option'>
                          <a> Community Investment </a>
                      </div>
                      <div className='option'>
                          <a> Consumer Activation </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Social Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Corporate Volunteer Program </a>
                      </div>
                      <div className='option'>
                          <a> Fundraising </a>
                      </div>
                      <div className='option'>
                          <a> Fundraising Partnership </a>
                      </div>
                      <div className='option'>
                          <a> Gift ln-Kind </a>
                      </div>
                      <div className='option'>
                          <a> Government Funding </a>
                      </div>
                      <div className='option'>
                          <a> Holistic Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Hospitality </a>
                      </div>
                      <div className='option'>
                          <a> ln-Kind Sponsorship </a>
                      </div>
                      <div className='option'>
                          <a> Intangible Marketing Benefits </a>
                      </div>
                      <div className='option'>
                          <a> Integrated Partnership </a>
                      </div>
                      <div className='option'>
                          <a> Licensed Merchandise </a>
                      </div>
                      <div className='option'>
                          <a> Licensee </a>
                      </div>
                      <div className='option'>
                          <a> Licensing </a>
                      </div>
                      <div className='option'>
                          <a> Market Segment </a>
                      </div>
                      <div className='option'>
                          <a> Market Share </a>
                      </div>
                      <div className='option'>
                          <a> Metrics </a>
                      </div>
                      <div className='option'>
                          <a> Minimum Guarantee </a>
                      </div>
                      <div className='option'>
                          <a> New Business Development </a>
                      </div>
                      <div className='option'>
                          <a> Offering </a>
                      </div>
                      <div className='option'>
                          <a> Optics </a>
                      </div>
                      <div className='option'>
                          <a> Organizational Readiness </a>
                      </div>
                      <div className='option'>
                          <a> Partner Summit </a>
                      </div>
                      <div className='option'>
                          <a> Philanthropy </a>
                      </div>
                      <div className='option'>
                          <a> Public Domain </a>
                      </div>
                      <div className='option'>
                          <a> Purpose Based Marketing </a>
                      </div>
                      <div className='option'>
                          <a> Purpose-Driven Brand (or Organisation) </a>
                      </div>
                      <div className='option'>
                          <a> Right of First Refusal </a>
                      </div>
                      <div className='option'>
                          <a> Sales Rights </a>
                      </div>
                      <div className='option'>
                          <a> Socially Responsible Business Practices </a>
                      </div>
                      <div className='option'>
                          <a> Sole Sponsor </a>
                      </div>
                      <div className='option'>
                          <a> Sponsee </a>
                      </div>
                      <div className='option'>
                          <a> Sponsor ID </a>
                      </div>
                      <div className='option'>
                          <a> Sponsorship </a>
                      </div>
                      <div className='option'>
                          <a> Sponsorship Agency </a>
                      </div>
                      <div className='option'>
                          <a> Sponsorship Fee </a>
                      </div>
                      <div className='option'>
                          <a> Sustainability </a>
                      </div>
                      <div className='option'>
                          <a> Sustainable Development Goals </a>
                      </div>
                      <div className='option'>
                          <a> Target Market </a>
                      </div>
                      <div className='option'>
                          <a> Title Sponsor </a>
                      </div>
                      <div className='option'>
                          <a> Triple Bottom Line (TPL) </a>
                      </div>
                      <div className='option'>
                          <a> Venture Philanthropy Funds </a>
                      </div>
                      <div className='option'>
                          <a> Volunteerism </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Win-Win-Win </a>
                      </div>
                      <div className='option'>
                          <a> Word-of-Mouth Marketing </a>
                      </div>
                  </div>
              </div>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectCategory;
