
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import ProductDress from './productdress';
import ProductHeels from './productheels';
import ProductBag from './productbag';

function ProductData() {
  return (
    <CardGroup style={{ margin: '20px' }}>
      <ProductDress />
      <ProductHeels />
      <ProductBag />
    </CardGroup>
  );
}

export default ProductData;
