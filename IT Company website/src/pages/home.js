import React from 'react';
import { Button, Nav, Form, FormControl,Navbar,Jumbotron,Container} from 'react-bootstrap';
import { ParallaxButton, ParallaxWrapper} from 'react-parallax-button'

import '../index.css'

import Cards from '../Components/Cards';
import Media from '../Components/Media';
import Particles from 'react-particles-js';
import Parllax from '../Components/Parllax';
import Footer from '../Components/Footer';

export default function Home() {
  return (
      <>
          <Jumbotron style={{backgroundColor:'#FFB833'}}>
  <h1>We are XO Company</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron> 
   <Cards />
   <br></br>
   <Parllax />
   <br></br>
   <Media />
   <br></br>
   
  
<Footer />

  
   </>
  );
}