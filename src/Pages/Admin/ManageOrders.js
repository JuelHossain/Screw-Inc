import { Container, CssBaseline } from "@mui/material";
import React from "react";
import OrdersTable from "../../Components/Shared/ordersTable";
import DenseTable from "../../Components/Shared/Table";

const ManageOrders = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <OrdersTable />
      </Container>
    </>
  );
};

export default ManageOrders;
