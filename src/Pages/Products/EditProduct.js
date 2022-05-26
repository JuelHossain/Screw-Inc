
import React from 'react';
import useProduct from '../../Hooks/useProduct';
import {useParams} from 'react-router-dom'
import Loading from '../../Components/Shared/Loading';
import { Container } from '@mui/material';


const EditProduct = () => {
    const { id } = useParams();
    const { product, productLoading, refetchProduct } = useProduct(id);
    console.log(product);
    if (productLoading) {
        return <Loading/>
    }
    return (
        <Container maxWidth={'sx'}>
            
        </Container>
    );
};

export default EditProduct