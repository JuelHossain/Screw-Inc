import { Container, CssBaseline } from "@mui/material";
import React from "react";
import ProductsTable from "../../Components/Shared/ProductsTable";


const ManageProducts = () => {

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <ProductsTable/>
      </Container>
    </>
  );
};

export default ManageProducts;
