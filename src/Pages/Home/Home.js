
import { Container } from '@mui/material';
import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';

const Home = () => {

    return (
      <Container maxWidth="xl">
        <Banner />
        <Products size={6}/>
      </Container>
    );
};

export default Home;