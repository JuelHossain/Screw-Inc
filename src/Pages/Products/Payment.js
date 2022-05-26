import { ArrowCircleRightTwoTone } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Checkbox, Container, Divider, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading';
import useOrder from '../../Hooks/useOrder';

const Payment = () => {
    const { id } = useParams();
    const { order, orderLoading, refetchOrder } = useOrder(id);
    const {register,handleSubmit,formState:{errors},isSubmitting } = useForm();
    if (orderLoading) {
        return<Loading/>
    }
    const {
      userName,
      userEmail,
      productName,
      qty,
      totalPrice,
      pricePerQuantity,
    } = order;
    console.log(order);

    //onsubmit form 
    const onSubmit = (data) => {
        console.log(data);
    }
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
              You are ordering , {productName}
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
          <Paper sx={{p:1}}>
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              fullWidth
                        variant={"contained"}
                        endIcon={<ArrowCircleRightTwoTone/>}
            >
              Or Pay With More Options here
            </LoadingButton>
          </Paper>
        </Box>
      </Container>
    );
};

export default Payment;