import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import OrdersTable from "../../Components/Shared/ordersTable";
import DenseTable from "../../Components/Shared/Table";

const ManageOrders = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight={500} mb="20px">
          Manage Orders
        </Typography>
        <OrdersTable />
      </Container>
    </>
  );
};

export default ManageOrders;
