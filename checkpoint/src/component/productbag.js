
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductBag = () => {
  const data = {
    name: 'Bag',
    price: 500,
    description: 'Birkin Bag',
    image: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2023/07/05/fb96d23e-f79e-4121-83b3-10842f47fccb_f8e5aaf6.jpg?itok=Gd-HvMHt&v=1688528140 '}

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

export default ProductBag;
