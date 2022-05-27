
import { Divider, Pagination, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Loading from '../../Components/Shared/Loading';
import usePageCount from '../../Hooks/usePageCount';
import useProducts from '../../Hooks/useProducts';
import Tools from './Tools';

const Products = ({size,p}) => {
  const [page, setPage] = React.useState(p||1);
  const { count, counting, recount } = usePageCount(size||12);
  const { products, productsLoading,refetchProducts,} = useProducts(page, size||12);
    if (productsLoading||counting) {
      return <Loading />;
  }
  const handleChange = (event, value) => {
    setPage((value));
    recount();
    refetchProducts()
  };
    return (
      <Container maxWidth={"lg"} sx={{ my: 10, textAlign: 'center' }}><Typography variant='h4'>
        Our Products
      </Typography>
        <Divider sx={ {mx:30,mt:2}}/>
        <Tools products={products} />
        <Pagination sx={{display:'flex',justifyContent:'center'}} count={count} variant="outlined" shape="rounded" onChange={handleChange} />
      </Container>
    );
};

export default Products;