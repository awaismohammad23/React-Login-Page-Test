// Sidebar.js
import Hotels from '../Hotels/Hotels';
import React from 'react';
import './Sidebar.css';
import LogoImage from '../../assets/Logo-1.svg';
import Overview from '../../assets/overview.svg';
import Quotation from '../../assets/quotation.svg';
import Hotel from '../../assets/hotels.svg';
import SightSeeings from '../../assets/sight-seeings.svg';
import Transfers from '../../assets/transfers.svg';
import ROE from '../../assets/ROE.svg';
import HelpAndInformation from '../../assets/help-information.svg';
import Logout from '../../assets/logout.svg';

export const Sidebar = () => {
  return (
    <div className='container'>
      <div className='sidebar-menu'>
        <div className='logo-second'>
          <img src={LogoImage} alt="logo" />
        </div>

        <div className='items'>
          <img src={Overview} alt="overview" /> <span> Overview</span>
        </div>

        <div className='items'>
          <img src={Quotation} alt="quotations" /> <span> Quotation</span>
        </div>

        <div className='items'>
          <img src={Hotel} alt="hotels" /> <span> Hotels</span>
        </div>

        <div className='items'>
          <img src={SightSeeings} alt="sight-seeings" /> <span> Sight Seeings</span>
        </div>

        <div className='items'>
          <img src={Transfers} alt="transfers" /> <span> Transfers</span>
        </div>

        <div className='items'>
          <img src={ROE} alt="roe" /> <span> ROE</span>
        </div>

        <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>


        <div className='items'>
          <img src={HelpAndInformation} alt="helpandinformation" /> <span> Help and Information</span>
        </div>

        <div className='items'>
          <img src={Logout} alt="logout" /> <span> Logout</span>
        </div>
      </div>

      <div className='vertical-line'></div>

      <div className='content'>
        <Hotels/>
      </div>
    </div>
  );
};
