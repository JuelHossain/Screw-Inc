import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Loading from '../../Components/Shared/Loading';
import ProductCard from '../../Components/Shared/ProductCard';
import useProducts from '../../Hooks/useProducts';

const Products = () => {
    const { products,productsLoading,refetchProducts} = useProducts();
    if (productsLoading) {
        return <Loading/>
    }
    return (
      <Container maxWidth={"lg"} sx={{my:10}}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
};

export default Products;