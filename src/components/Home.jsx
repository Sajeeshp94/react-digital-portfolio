import React from 'react'
import { Card,Col,Container,Row } from 'react-bootstrap'


function Home() {
  return (
    
      <Row>
        <Col>
        <Card>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"  />
        <Card.Text ><h2>Hi, I'm Sajeesh</h2>
        <h6><b>A Full Stack Developer</b></h6>
        </Card.Text>
        </Card>
        </Col>
      </Row>
    
  )
}

export default Home