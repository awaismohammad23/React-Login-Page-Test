import React from 'react'
import './Sidebar.css'
import LogoImage from '../../assets/Logo-1.svg';
import Overview from '../../assets/overview.svg';
import Quotation from '../../assets/quotation.svg';
import Hotels from '../../assets/hotels.svg';
import SightSeeings from '../../assets/sight-seeings.svg';



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

               <img src={Quotation} alt="overview" /> <span> Quotation</span>

            </div>
            <div className='items'>

               <img src={Hotels} alt="overview" /> <span> Hotels</span>

            </div>
            <div className='items'>

               <img src={SightSeeings} alt="overview" /> <span> Sight Seeings</span>

            </div>
            <div className='items'>

               <img src={Overview} alt="overview" /> <span> Overview</span>

            </div>

        
        </div>
   
 
  )
}
