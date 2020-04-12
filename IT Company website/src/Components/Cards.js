import React from 'react';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import '../index.css';
import { ParallaxButton, ParallaxWrapper} from 'react-parallax-button'


export default function Cards() {
  return (
      <div>
          <Container fluid>
  <Row>
    <Col>
    <Card style={{ width: 'auto' }}>
    <ParallaxWrapper parallaxScale={0.50}>  
    <Card.Img variant="top" src="https://image.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg" />
</ParallaxWrapper>
  
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <center><ParallaxButton
  text="Click Me"
  backgroundStyle={{
    background: 'linear-gradient(135deg, #7F00FF, #E100FF)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
  }}
  textStyle={{
    padding: '1.5em 2.5em 1.5em 2.5em',
    color: 'white'
  }}
/></center>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: 'auto' }}>
    <ParallaxWrapper parallaxScale={0.50}>
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/isometric-people-working-with-technology_52683-19080.jpg" />
  </ParallaxWrapper>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <center><ParallaxButton
  text="Click Me"
  backgroundStyle={{
    background: 'linear-gradient(135deg, #7F00FF, #E100FF)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
  }}
  textStyle={{
    padding: '1.5em 2.5em 1.5em 2.5em',
    color: 'white'
  }}
/></center>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: 'auto' }}>
    <ParallaxWrapper parallaxScale={0.50}>
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/isometric-people-working-with-technology_52683-19082.jpg" />
  </ParallaxWrapper>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <center><ParallaxButton
  text="Click Me"
  backgroundStyle={{
    background: 'linear-gradient(135deg, #7F00FF, #E100FF)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
  }}
  textStyle={{
    padding: '1.5em 2.5em 1.5em 2.5em',
    color: 'white'
  }}
/></center>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: 'auto' }}>
    <ParallaxWrapper parallaxScale={0.50}>
  <Card.Img variant="top" src="https://image.freepik.com/free-vector/isometric-people-working-with-technology_52683-19084.jpg" />
  </ParallaxWrapper>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <center><ParallaxButton
  text="Click Me"
  backgroundStyle={{
    background: 'linear-gradient(135deg, #7F00FF, #E100FF)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
  }}
  textStyle={{
    padding: '1.5em 2.5em 1.5em 2.5em',
    color: 'white'
  }}
/></center>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
      
   </div>
  );
}