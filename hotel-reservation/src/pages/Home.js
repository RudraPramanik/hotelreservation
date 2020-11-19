import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom'
import Services from '../component/Services';
import FeaturedRooms from '../component/FeaturedRooms';


function Home() {
    return (
        <>
      <Hero>
          <Banner title="luxurious rooms">
              <Link to="/rooms" className="btn-primary">
                  our rooms
              </Link>
          </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms/>
      </>
    )
}


export default Home
