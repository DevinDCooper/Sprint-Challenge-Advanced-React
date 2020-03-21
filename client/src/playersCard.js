import React from 'react';
import {
  Card,  CardText, CardBody,
  CardTitle, CardSubtitle, 
} from 'reactstrap';

const PlayersCard = ({data}) => {
  return (
    <div className="big-box">
    <div className ="play-card">
      <Card>
        <CardBody>
          <CardTitle data-test-id="name header">Names: {data.name}</CardTitle>
        <br/>
          <CardSubtitle>Country: {data.country}</CardSubtitle>
          <CardText>Searches: {data.searches}</CardText>
          <CardText>ID: {data.id}</CardText>
        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default PlayersCard;


