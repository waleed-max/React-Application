
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" style={{backgroundColor:'#FFB833'}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="4">
            
            <ul>
            <h5 className="title">Links</h5>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Services</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Media</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            
            <ul>
            <h5 className="title">Links</h5>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Services</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Media</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; 2015-{new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> XO Company</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;