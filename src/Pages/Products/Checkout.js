import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Input,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import useProduct from "../../Hooks/useProduct";

const Checkout = () => {
    const { id } = useParams();
    const [user,userLoading] = useAuthState(auth)
  const { product, productLoading, refetchProduct } = useProduct(id);
  const {
    getValues,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
          qty: 100,
    },
  });
 
  if (productLoading || userLoading) {
    return <Loading />;
  } else {
  }
  const name = product?.name;
  const qty = parseInt(product?.qty);
  const price = parseInt(product?.price);

   const onSubmit = (data) => {
     
   };
  return (
    <Container maxWidth="xs" sx={{ my: 8 }}>
      <Paper sx={{ p: 1 }}>
        <Typography fontSize={20} sx={{ m: 2 }} align="center">
          You are Ordering {name}
        </Typography>
        <Stack onSubmit={handleSubmit(onSubmit)} component={"form"} spacing={1}>
          <TextField
            variant="filled"
            value={price}
            id="outlined-start-adornment"
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  Price Per Quantity:
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            value={qty}
            id="outlined-start-adornment"
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">
                  Available Quantity:
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            id="outlined-start-adornment"
            InputProps={{
              type: "number",
              startAdornment: (
                <InputAdornment position="start">
                  How Much You Need ? :
                </InputAdornment>
              ),
            }}
            {...register("qty", {
              required: {
                value: true,
                message: "quantity is required",
              },
              valueAsNumber: {
                value: true,
                message: "Only Number is allowed",
              },
              max: {
                value: qty,
                message: "We Don't Have That Much",
              },
              min: {
                value: 100,
                message: "Minimum 100 should be Ordered",
              },
            })}
            error={Boolean(errors?.qty)}
            helperText={errors?.qty?.message}
          />
          <TextField
            type={"number"}
            min={0}
            readOnly
            variant="filled"
            value={price * getValues("qty")}
            id="outlined-start-adornment"
            {...register("totalPrice", {
              valueAsNumber: true,
            })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  Total Price Will Be:
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="filled"
            id="outlined-start-adornment"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone Number is Required",
              },
              pattern: {
                value: /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/,
                message: "Give Us a Valid Phone Number",
              },
            })}
            label="Give Us Your Phone Number"
            error={Boolean(errors?.phoneNumber)}
            helperText={errors?.phoneNumber?.message}
          />
          <TextField
            multiline
            rows={2}
            variant="filled"
            id="outlined-start-adornment"
            {...register("address", {
              required: {
                value: true,
                message: "address is required",
              },
            })}
            label="Give Us Your Shipping Address"
            error={Boolean(errors?.address)}
            helperText={errors?.address?.message}
          />

          <LoadingButton type={"submit"} variant="contained">
            Place Order
          </LoadingButton>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Checkout;
