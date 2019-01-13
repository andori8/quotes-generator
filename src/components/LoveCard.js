import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Love from '../images/love.png';

const Example = (props) => {
  return (
    <div className="card-item">
      <Card className="card">
        <CardImg top width="100%" src={Love} alt="Card image cap" />
        <CardBody>
          <CardTitle>Love</CardTitle>
          <CardText>Quotes to Remind You of the Importance of Love</CardText>
          <Button href="/categories/4">Love Quotes</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
