import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductData from './component/ProductData';

const App = () => {
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    const userName = prompt("Please enter your name:");
    setFirstName(userName);
  }, []);

  const appStyle = {
    backgroundColor: '#E9ECF1',
    color: '#6E7F9E',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const profileImageStyle = {
    borderRadius: '50%',
    marginTop: '10px',
    width: '100px',
    height: '100px',
  };

  return (
    <div style={appStyle}>
      <Container className="mt-5">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {firstName && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/168/168730.png"
              alt="Profile"
              style={profileImageStyle}
            />
          )}
          <h2 style={{ marginLeft: '10px' }}>Hello, {firstName ? firstName : 'there'}!</h2>
        </div>
        <ProductData />
      </Container>
    </div>
  );
};

export default App;
