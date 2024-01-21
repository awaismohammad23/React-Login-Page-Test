import React from 'react'
import './Hotels.css'
import SearchIcon from '../../assets/search.svg'
import Notifiaction from '../../assets/new.svg' 
import HotelCard from '../HotelCard/HotelCard'

const Hotels = () => {
  return (
    <div className='container'>
       
        {/*heading for the hotels*/}
        <div className='heading'><b>Hotels</b></div>

        {/*search bar added*/}
        <input type='text' placeholder='Search Hotels' className='search' />

        {/*adding icons for search and notification*/}
        <img src={SearchIcon} alt='search' className='icons'/>
        <img src={Notifiaction} alt='notification' className='notification'/>
        
    </div>
    
  )
}

export default Hotels