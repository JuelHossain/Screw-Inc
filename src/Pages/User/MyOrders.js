import { Container, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../Components/Shared/Loading";
import OrdersTable from "../../Components/Shared/ordersTable";
import auth from "../../firebase";

const MyOrders = () => {
    const [user, userLoading] = useAuthState(auth);
    const { data, isLoading, error, refetch } = useQuery('myorders', () => axios(`/myOrders?email=${user?.email}`));
    const myOrders = data?.data;
    console.log('my ordres ',myOrders);
    if (userLoading) {
        return <Loading/>
    }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight={500} mb="20px">
          My Orders
        </Typography>
              <OrdersTable orders={myOrders}
                  ordersLoading={isLoading}
                  ordersError={error}
                refetchOrders={refetch}
              />
      </Container>
    </>
  );
};

export default MyOrders;
