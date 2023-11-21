
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductDress = () => {
  const data = {
    name: 'Dress',
    price: 2000,
    description: 'Red Maxi Dress',
    image: 'https://media.glamourmagazine.co.uk/photos/6206921941fcfe0b923c7dfb/1:1/w_1920,h_1920,c_limit/REDDRESSES%20110222%20SQUARE.jpg',
  };

  return (
    <Card>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>{`$${data.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductDress;
