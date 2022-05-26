
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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 justify-items-center ' >
          {products.map((product) => (
           
              <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    );
};

export default Products;