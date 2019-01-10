import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Smile from '../images/smiley.jpeg';

const Example = (props) => {
  return (
    <div className="card-item">
      <Card className="card">
        <CardImg top width="100%" src={Smile} alt="Card image cap" />
        <CardBody>
          <CardTitle>Humor</CardTitle>
          <CardText>Quotes to Brighten up Your Day!</CardText>
          <Button href="/categories/2">Humor Quotes</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
