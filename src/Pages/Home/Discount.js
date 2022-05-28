import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Technician from '../../technician.jpg'
const Discount = () => {
    return (
      <Container maxWidth={"lg"} sx={{my:3}}>
        <div class="hero bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src={Technician}
              alt="technician"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-5xl font-bold">50% Discount</h1>
              <p class="py-6">
                Please Read Carefully, This Discount is only Available for
                Technicians. who work day and night to make our community better
                , All Technicians please order your reliable tools with 50%
                discount now.
              </p>
              <Button component={Link} to="/products" variant="contained">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Discount;