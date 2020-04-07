import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Form, FormControl,Navbar} from 'react-bootstrap';
import '../index.css'


export default function NavbarMain() {
  

  return (

   <>
   <Navbar collapseOnSelect expand="lg" className='nav' sticky="top" >
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Services">Services</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   </>
  );
}













// import React from 'react'
// import {Link} from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import Logo from './UI/logo';



// export default function Navbar() {
  
    

//   return (
//     <React.Fragment>
//        <AppBar 
//     position="static" style={{
//       backgroundColor: '#F5F5F5',
//       boxShadow: 'none',
//       padding: '10px 0',
//       borderBottom: '1px solid #C8CACE',
//     }}>
//       <Toolbar style={{display: 'flex'}}>
//         <div style={{flexGrow:1}}>
//           <div className="header_logo">
//            <Logo 
//              link={true}
//              linkTo="/"
//              width="70px"
//              height="70px"
//            />
//           </div>

//         </div>
//                  <Link to="/">
//                    <Button >Home</Button>
//                   </Link>
                
//                  <Link to="/about-us">
//                  <Button >About Us</Button>
//                    </Link>
                 
//                  <Link to="/services">
//                  <Button >Services</Button>
//                    </Link>
                
//                  <Link to="/our-works">
//                  <Button >Our Works</Button>
//                    </Link>
                 
//                  <Link to="/our-customers">
//                  <Button >Our Customers</Button>
//                    </Link>
                 
//                  <Link to="/news">
//                  <Button >News</Button>
//                    </Link>
                   
//                    <Link to="/*">
//                  <Button variant="contained" color="secondary">Contact us</Button>
//                    </Link>
                

//       </Toolbar>
    
//     </AppBar>
//     </React.Fragment>
   
    
  
//   );
// }

