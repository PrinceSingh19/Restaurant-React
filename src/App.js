import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';

function App() {
  return (
      <div>
        <Navbar dark color='primary' className='my-2'>
       
          <NavbarBrand href='./' className='mx-2'>
            Ristorante De Confusion
          </NavbarBrand>
  
      </Navbar>
      </div>
  );
}

export default App;
