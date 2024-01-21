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
import HotelCard from '../HotelCard/HotelCard';

import Hotel1 from '../../assets/hotel-1.png';
import Hotel2 from '../../assets/hotel-2.png';
import Hotel3 from '../../assets/hotel-3.png';
import Hotel4 from '../../assets/hotel-4.png';
import Hotel5 from '../../assets/hotel-5.png';
import Hotel6 from '../../assets/hotel-6.png';
import Hotel7 from '../../assets/hotel-7.png';
import Hotel8 from '../../assets/hotel-8.png';
import Hotel9 from '../../assets/hotel-9.svg';
import Hotel10 from '../../assets/hotel-10.svg';
import Hotel11 from '../../assets/hotel-11.svg';
import Hotel12 from '../../assets/hotel-12.svg';



const hotels = [
  {
    image: '../../assets/hotel-1.png',
    name: 'AMBASSADOR BANGKOK',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-2.png',
    name: 'RAMADA BY WYNDHAM BANGKOK SUKHUMVIT 11',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-3.png',
    name: 'IBIS SUKHUMVIT',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-4.png',
    name: 'ANYA NANA',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-5.png',
    name: 'GRAND PRESIDENT',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-6.png',
    name: 'CITRUS SUKHUMVIT',
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-7.png',
    name: "SEASON'S SIAM",
    city: 'BANGKOK'
  },
  {
    image: '../../assets/hotel-8.png',
    name: 'SUN BEAM PATTAYA',
    city: 'PATTAYA'
  },
  {
    image: '../../assets/hotel-9.svg',
    name: 'GOLDEN BEACH PATTAYA',
    city: 'PATTAYA' 
  },
  {
    image: '../../assets/hotel-10.svg',
    name: 'GOLDEN SEA PATTAYA',
    city: 'PATTAYA'
  },
  {
    image: '../../assets/hotel-11.svg',
    name: 'DISCOVERY PATTAYA',
    city: 'PATTAYA'
  },
  {
    image: '../../assets/hotel-12.svg',
    name: 'AMATA PATONG',
    city: 'PHUKET'
  }
];

export const Sidebar = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
       
        <div className='hotels-header'>Hotels</div>
      </div>

      <div className='sidebar-menu'>
          
          <div className='logo-second'>
            <img src={LogoImage} alt="logo" />
          </div>
          
          <div className='items'>
          <img src={Overview} alt="overview" /> <span>Overview</span>
          </div>

          <div className='items'>
          <img src={Quotation} alt="quotations" /> <span>Quotation</span>
          </div>

          <div className='items'>
          <img src={Hotel} alt="hotels" /> <span>Hotels</span>
          </div>

          <div className='items'>
          <img src={SightSeeings} alt="sight-seeings" /> <span>Sight Seeings</span>
          </div>

          <div className='items'>
          <img src={Transfers} alt="transfers" /> <span>Transfers</span>
          </div>

          <div className='items'>
          <img src={ROE} alt="roe" /> <span>ROE</span>
          </div>

          <div className='items'></div>
          <div className='items'></div>
          <div className='items'></div>
          <div className='items'></div>


          <div className='items'>
          <img src={HelpAndInformation} alt="helpandinformation" /> <span>Help and Information</span>
          </div>

          <div className='items'>
          <img src={Logout} alt="logout" /> <span>Logout</span>
          </div>
          </div>

      <div className='vertical-line'></div>

      <div className='content'>
        <Hotels />

       <div className='content-area'>
        {/*create the hotel cards one by one by giving the name and city from the array and image from the variables above*/}
        <HotelCard image={Hotel1} name='AMBASSADOR BANGKOK' city='BANGKOK' />
        <HotelCard image={Hotel2} name='RAMADA BY WYNDHAM BANGKOK SUKHUMVIT 11' city='BANGKOK' />
        <HotelCard image={Hotel3} name='IBIS SUKHUMVIT' city='BANGKOK' />
        <HotelCard image={Hotel4} name='ANYA NANA' city='BANGKOK' />
        <HotelCard image={Hotel5} name='GRAND PRESIDENT' city='BANGKOK' />
        <HotelCard image={Hotel6} name='CITRUS SUKHUMVIT' city='BANGKOK' />
        <HotelCard image={Hotel7} name="SEASON'S SIAM" city='BANGKOK' />
        <HotelCard image={Hotel8} name='SUN BEAM PATTAYA' city='PATTAYA' />
        <HotelCard image={Hotel9} name='GOLDEN BEACH PATTAYA' city='PATTAYA' />
        <HotelCard image={Hotel10} name='GOLDEN SEA PATTAYA' city='PATTAYA' />
        <HotelCard image={Hotel11} name='DISCOVERY PATTAYA' city='PATTAYA' />
        <HotelCard image={Hotel12} name='AMATA PATONG' city='PHUKET' />


        {/*{hotels.map((hotel, index) => (
          <HotelCard key={index} {...hotel} />
        ))}*/} 

       </div>
        
      </div>
    </div>
  );
};



