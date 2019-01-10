import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MotivationCard from './MotivationCard';
import FunnyCard from './FunnyCard';
import SportsCard from './SportsCard';
import LoveCard from './LoveCard';

class Home extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col col-6><MotivationCard /></Col>
          <Col col-6><FunnyCard /></Col>
        </Row>
        <Row>
          <Col><SportsCard /></Col>
          <Col><LoveCard /></Col>
        </Row>
      </Container>
    )
  }
}

export default Home;
