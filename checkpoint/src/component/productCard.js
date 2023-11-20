import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductCard.css';
import productData from './productCard';

function ProductCard() {
  const { name, price, description, image } = productData;

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;


