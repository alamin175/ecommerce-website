import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Shop from '../main container/main-container';

const Home = () => {
    return (
        <div>
          <Header></Header>  
          <Outlet></Outlet>
        </div>
    );
};

export default Home;