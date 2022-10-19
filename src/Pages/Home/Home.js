
import { Container } from '@mui/material';
import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import Business from './Business';
// import Discount from './Discount';
import Feedback from './Feedback';

const Home = () => {

    return (
      <Container maxWidth="xl">
        <Banner />
        <Business />
        <Products size={6} />
        {/* <Discount /> */}
        <Reviews size={6} />
        <Feedback />
      </Container>
    );
};

export default Home;