
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductHeels = () => {
  const data = {
    name: 'Heels',
    price: 1000,
    description: 'Black 11 inch Heels',
    image:'https://us.christianlouboutin.com/media/catalog/product/cache/c8e9b72c512eaa31cd76a11d9f425a9e/1/1/1190911bk01-1190911bk01-hover-ecommerce-christianlouboutin-hotchick-1190911_bk01_2_1200x1200.jpg'}
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

export default ProductHeels;
