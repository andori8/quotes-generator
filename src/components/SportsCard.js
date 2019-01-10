import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Sports from '../images/sports.jpg';

const Example = (props) => {
  return (
    <div className="card-item">
      <Card className="card">
        <CardImg top width="100%" src={Sports} alt="Card image cap" />
        <CardBody>
          <CardTitle>Sports</CardTitle>
          <CardText>Get Your Sports Qutoes Here!</CardText>
          <Button href="/categories/3">Sports Quotes</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
