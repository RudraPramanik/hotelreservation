import React from 'react';
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom';
import  RoomContainer from '../component/RoomContainer'

const Rooms = () => {

    return(
      <>
    <Hero hero='roomsHero'>
      <Banner title="OUR ROOMS">
      <Link to="/" className="btn-primary">back to home</Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>
    ) 
}

export default Rooms
