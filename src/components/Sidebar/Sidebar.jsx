import React from 'react'
import './Sidebar.css'
import LogoImage from '../../assets/Logo-1.svg';
import Overview from '../../assets/overview.svg';
import Quotation from '../../assets/quotation.svg';
import Hotels from '../../assets/hotels.svg';
import SightSeeings from '../../assets/sight-seeings.svg';
import Transfers from '../../assets/transfers.svg';
import ROE from '../../assets/ROE.svg';
import HelpAndInformation from '../../assets/help-information.svg';
import Logout from '../../assets/logout.svg';

export const Sidebar = () => {
  return (

    
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

               <img src={Hotels} alt="hotels" /> <span> Hotels</span>

            </div>
            <div className='items'>

               <img src={SightSeeings} alt="signt-seeings" /> <span> Sight Seeings</span>

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
            <div className='items'></div>

            <div className='items'>

                <img src={HelpAndInformation} alt="roe" /> <span> Help and Information</span>

            </div>

            <div className='items'>

                <img src={Logout} alt="roe" /> <span> Logout</span>

            </div>
        
        </div>
   
 
  )
}
