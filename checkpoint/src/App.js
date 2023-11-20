
import React from 'react';
import ProductCard from './Component/ProductCard.js';
import './App.css'; 
import productData from './component/ProductData.js';


function App() {
  const firstName = 'YourFirstName'; 

  return (
    <div className="App">
      <h1>Hello, {firstName ? firstName : 'there'}!</h1>
      <ProductCard product={productData} />
    </div>
  );
}

export default App;
