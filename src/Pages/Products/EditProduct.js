
import React from 'react';
import useProduct from '../../Hooks/useProduct';
import {useParams} from 'react-router-dom'
import Loading from '../../Components/Shared/Loading';

const EditProduct = () => {
    const { id } = useParams();
    const { product, productLoading, refetchProduct } = useProduct(id);
    console.log(product);
    if (productLoading) {
        return <Loading/>
    }
    return (
        <div>
            {product?.name};
        </div>
    );
};

export default EditProduct