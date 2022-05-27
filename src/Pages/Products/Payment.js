import { ArrowCircleRightTwoTone } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab"; 

import {
  Box,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import useOrder from "../../Hooks/useOrder";
import Confirm from "../../Components/Shared/Confirm";

const Payment = () => {
  const [open, setOpen] = useState(false);
  // const [paymentId, setPaymentId] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { order, orderLoading, refetchOrder } = useOrder(id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm();

  if (orderLoading) {
    return <Loading />;
  }

  const {
    address,
    phoneNumber,
    userName,
    userEmail,
    productName,
    qty,
    totalPrice,
    pricePerQuantity,
  } = order;
  // const url = "http://localhost:5000";
  const agreed = () => {
    // console.log(paymentId,'this is payment id');
    axios
      .put(`/orders/${id}`, {
        paid: true,
        transcationId: (Math.random() + 1).toString(36).substring(7),
      })
      .then((res) => {
        if (res.data.acknowledged) {
          navigate("/payment/success");
        } else {
          navigate("/payment/canceled");
        }
      }).catch(error => navigate('/payment/failed'));
  };
  // const paymentData = {
  //   total_amount: totalPrice,
  //   currency: "BDT",
  //   tran_id: (Math.random() + 1).toString(36).substring(7),
  //   success_url: `${url}/payment/success`,
  //   fail_url: `${url}/payment/fail`,
  //   cancel_url: `${url}/payment/cancel`,
  //   ipn_url: `${url}/ipn`,
  //   shipping_method: "Courier",
  //   product_name: productName,
  //   product_category: "tools",
  //   product_profile: "general",
  //   cus_name: userName,
  //   cus_email: userEmail,
  //   cus_add1: address,
  //   cus_add2: "Dhaka",
  //   cus_city: "Dhaka",
  //   cus_state: "Dhaka",
  //   cus_postcode: "1000",
  //   cus_country: "Bangladesh",
  //   cus_phone: phoneNumber,
  //   cus_fax: "01711111111",
  //   ship_name: userName,
  //   ship_add1: address,
  //   ship_add2: "Dhaka",
  //   ship_city: "Dhaka",
  //   ship_state: "Dhaka",
  //   ship_postcode: 1000,
  //   ship_country: "Bangladesh",
  //   multi_card_name: "mastercard",
  //   value_a: "ref001_A",
  //   value_b: "ref002_B",
  //   value_c: "ref003_C",
  //   value_d: "ref004_D",
  // };

  //onsubmit form
  const onSubmit = (data) => {
    setOpen(true);
    // will implement later .
  };
  return (
    <Container maxWidth="xs" sx={{ my: 8 }}>
      <Box>
        <Paper sx={{ p: 1, mb: 2 }}>
          <Typography fontSize={22} fontWeight={"300"}>
            Hi, {userName}
          </Typography>
          <Typography fontSize={17}>
            Please Make the Payment Of Your Order
          </Typography>
        </Paper>
        <Paper sx={{ p: 1, mb: 2 }}>
          <Typography fontSize={17} mb="1px">
            You are Paying for , {productName}
          </Typography>
          <Typography fontSize={17} fontWeight={"200"} mb="1px">
            Quantity : {qty} pcs.
          </Typography>
          <Typography fontSize={17} fontWeight={"200"} mb="1px">
            Per Pieces : {pricePerQuantity} Taka.
          </Typography>
          <Typography fontSize={17} fontWeight={"200"} mb="1px">
            Please Pay : {totalPrice} Taka.
          </Typography>
        </Paper>
        <Paper
          sx={{ p: 1, mb: 1 }}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            loading={isSubmitting}
            fullWidth
            variant={"contained"}
          >
            Pay Now
          </LoadingButton>
        </Paper>
        <Divider>or</Divider>
        <Confirm open={open} setOpen={setOpen} title='Please Pay Here' text={'I was having Problem with cors policy which i have tried 1 day to solve, but i cannot resolved the problem i will implement payment system later please complete payment by clicking the these button'} agreed={agreed} falsy='payment Cancal' truthy='payment Success' />
        <Paper sx={{ p: 1 }}>
          <LoadingButton
            onClick={() => {
              setOpen(true);
              // axios.post(`/payments`, paymentData).then((res) => {
              //   console.log(res.data);
              //   if (res.data.acknowledged) {
              //     setOpen(true);
              //     console.log(res.data.insertedId,'this is insreted id');
              //     setPaymentId(res.data.insertedId);
                  // can't solve the cors problem thats why payment is undone
                  // axios.get(`payments/${res.data.insertedId}`).then((res) => {
                  //   console.log(res);
                  //   // const { sessionkey, GatewayPageURL } = res.data;
                  //   // console.log(res.data);
                  //   // if (GatewayPageURL) {
                  //   //   window.location.href = GatewayPageURL;
                  //   // }
              //     // });
              //   }
              // });
            }
            }
            loading={isSubmitting}
            fullWidth
            variant={"contained"}
            endIcon={<ArrowCircleRightTwoTone />}
          >
            Or Pay With More Options here
          </LoadingButton>
        </Paper>
      </Box>
    </Container>
  );
};

export default Payment;
