import React from 'react';
import {Link} from 'react-router-dom';
import ServicesCards from '../Components/ServicesCards/ServicesCards';

export default function services() {
  return (
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>The easiest way to grow with <br></br> media company</h1>
          <p>Get more traffic, time and peace of mind thanks to a simple setup</p>
          <Link to="/">Home page</Link>
        </div>
        <div className="Cards">
         <h2>our Services</h2>
         <div className="CardsGroup">
         <ServicesCards
         image={require('../assets/imagecard2.png')}
         title="React for Designers"
         text="Some text"/>
         <ServicesCards
         image={require('../assets/imagecard1.png')}
         title="React for Designers"
         text="Some text"/>
         <ServicesCards
         image={require('../assets/imagecard3.png')}
         title="React for Designers"
         text="Some text"/>
         </div>
         
                  
        </div>
      </div>

      
    </div>
  )
}
