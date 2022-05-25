import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Loading from '../../Components/Shared/Loading';
import useProducts from '../../Hooks/useProducts';
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  {
    field: "qty",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    width: 160,
  },
];


const ManageProducts = () => {
    const { products, productsLoading, refetchProducts } = useProducts();
    console.log(products);
    const rows=products?.map((product,index)=> 
    {
        return {
            id: index + 1,
            name: product.name,
            qty: product.qty,
            price:product.price
        }
    })

    if (productsLoading) {
        return <Loading />
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

export default ManageProducts;