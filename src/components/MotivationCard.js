import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Image from '../images/motivation.jpeg';

const Example = (props) => {
  return (
    <div className="card-item">
      <Card className="card">
        <CardImg top width="100%" src={Image} alt="Card image cap" />
        <CardBody>
          <CardTitle>Motivation</CardTitle>
          <CardText>Get Your Daily Dose of Motivation!</CardText>
          <Button href="/categories/1">Motivational Quotes</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
