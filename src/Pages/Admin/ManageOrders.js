import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import OrdersTable from "../../Components/Shared/ordersTable";
import DenseTable from "../../Components/Shared/Table";
import useOrders from "../../Hooks/useOrders";

const ManageOrders = () => {
  const { orders, ordersLoading, ordersError, refetchOrders } = useOrders();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight={500} mb="20px">
          Manage Orders
        </Typography>
        <OrdersTable orders={orders} ordersError={ordersError} ordersLoading={ordersLoading} refetchOrders={refetchOrders} />
      </Container>
    </>
  );
};

export default ManageOrders;
