import React from 'react'
import './HotelCard.css'
//create an array of hotels that should contain the name of the hotel and city give arbitrary values

 const HotelCard = ({image,name, city }) => {
    return (
        <div className="hotel-card">
          <img src={image} alt="Hotel" className="hotel-image" />
          <div className="hotel-details">
            
            {/*title*/}
            <p className="title">Hotel</p>
            
            {/*button*/}
            <button className="button">{name}</button>
            
            {/*title*/}
            <p className="title">City</p>
            
            {/*button*/}
            <button className="button">{city}</button>

            {/*button*/}
            <button className="details">Check Details</button>
          </div>
        </div>
      );
  };

export default HotelCard;
