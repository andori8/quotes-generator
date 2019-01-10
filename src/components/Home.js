import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MotivationCard from './MotivationCard';
import HumorCard from './HumorCard';
import SportsCard from './SportsCard';
import LoveCard from './LoveCard';

class Home extends Component {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col><MotivationCard /></Col>
          <Col><HumorCard /></Col>
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
