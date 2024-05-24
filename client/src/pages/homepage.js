import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from "react-bootstrap";

function DarkVariantExample() {
  return (
    <div className='home'>
    <Container>
      <br/>
      <div className='head'>
      <h1 style={{margin: "450px 0 0 0"}}>We Welcome You To Experience Virtual Traveling </h1>
      <p> Your busy schedule might interfere in your life to explore and adventure , But no worries ! here we'll provide you a virtual  experience of visiting Indian Piligrims </p>
      <p>Hope you'll enjoy our work </p>
      </div>

      <div className="corousel">
        <Carousel variant="light">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images7.alphacoders.com/546/546403.jpg"
              alt="First slide"
              height={"620px"}
            />
            <Carousel.Caption>
              <h1>Golden Temple</h1>
              <p>The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://growingupgupta.com/wp-content/uploads/2016/11/hindu-temple-1610625_1920.jpg"
              alt="Second slide"
              height={"620px"}
            />
            <Carousel.Caption>
              <h1>BAPS Shri Swaminarayan Mandir Atlanta</h1>
              <p>Mandir in Atlanta, Georgia</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.tripinvites.com/places/mysore/somanathapura-temple/building-of-somnathapura-temple-featured.jpg"
              alt="Third slide"
              height={"620px"}
            />
            <Carousel.Caption>
              <h1>Chennakeshava Temple, Somanathapur</h1>
              <p>
                <p>The temple was consecrated in 1258 CE by Somanatha Dandanayaka</p>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='centre'>
        <div>
          <img src='https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Fillustrations%2Flearning-illustration-new-year-2023-01.png?auto=format&h=650&ixlib=php-3.3.1&s=3cd6a2d28b3bbe3ed0267eb9e8a09d77' width={"30%"} alt='Work !'></img>
        </div>
        <div>
          <h2>Start your journey</h2>
          <p>Login to start</p>
          <Button className='button' href="/Login" variant="primary">Login</Button>
          <Button className='button' href="/Register" variant="primary">register</Button>
        </div>
      </div>
      <div>
        
      </div>
    </Container>
    </div>

  );
}

export default DarkVariantExample;