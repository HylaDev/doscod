import React from 'react'
import '../styles/AboutMe.css'
import {Container, Row, Col} from 'react-bootstrap'
import AboutImage from '../assets/Dev Web 1.jpg'
const about = () => {
  return (
    <div className='aboutMe'>
      <h1>About Me</h1>
      <Container>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis sit quis eu erat. Fermentum est at gr
              avida vitae semper. Morbi sollicitudin sed massa diam. Fermentum commodo at quis
              Lorem ipsum dolor sit amet consectetur. Turpis sit quis eu erat. Fermentum est at gr
              avida vitae semper. Morbi sollicitudin sed massa diam. Fermentum commodo 
            </p>
          </Col>
          <Col md={6}>
            <img className='about-img' src={AboutImage} alt='Pict'/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default about
