import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import ProductsTable from "../../Components/Shared/ProductsTable";


const ManageProducts = () => {

  return (
    <>
      <CssBaseline />
          <Container maxWidth="xl" sx={{ my: 4 }}>
              <Typography variant="h5" fontWeight={500} mb='20px'>
                  Manage Products
              </Typography>
        <ProductsTable/>
      </Container>
    </>
  );
};

export default ManageProducts;
