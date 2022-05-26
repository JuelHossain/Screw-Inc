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
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import useProduct from "../../Hooks/useProduct";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, userLoading] = useAuthState(auth);
  const { product, productLoading, refetchProduct } = useProduct(id);
  const {
    getValues,
    register,
    handleSubmit,
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
  const text = product?.text;

  const onSubmit = (data) => {
    const order = {
      userName: user?.displayName,
      userEmail: user?.email,
      productName: name,
      pricePerQuantity: price,
      quantityWas: qty,
      ...data,
    };
    console.log(order.productName);
    const paymentData = {
      total_amount: data.totalPrice,
      currency: "BDT",
      tran_id: (Math.random() + 1).toString(36).substring(7),
      success_url: `${process.env.REACT_APP_URL}/success`,
      fail_url: `${process.env.REACT_APP_URL}/failure`,
      cancel_url: `${process.env.REACT_APP_URL}/cancel`,
      ipn_url: `${process.env.REACT_APP_URL}/ipn`,
      shipping_method: "Courier",
      product_name: name,
      product_category: "tools",
      product_profile: "general",
      cus_name: order.userName,
      cus_email: order.userEmail,
      cus_add1: data.address,
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: data.phoneNumber,
      cus_fax: "01711111111",
      ship_name: order.userName,
      ship_add1: data.address,
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
      multi_card_name: "mastercard",
      value_a: "ref001_A",
      value_b: "ref002_B",
      value_c: "ref003_C",
      value_d: "ref004_D",
    };
    if (user) {
      axios.post("/orders", paymentData).then((res) => {
        if (res.data.acknowledged) {
          const insertedId = res.data.insertedId;
          axios.get(`/payment/${insertedId}`).then(res => console.log(res));
        }
      });
    }
  };
  return (
    <Container maxWidth="xs" sx={{ my: 8 }}>
      <Paper sx={{ p: 1 }}>
        <Typography fontSize={20} sx={{ m: 2 }} align="center">
          You are Ordering {name}
        </Typography>
        <Typography height={80} overflow='auto' fontSize={16} sx={{ m: 2 }} align="center">
        {text}
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
            autoFocus
            variant="filled"
            id="outlined-start-adornment"
            InputProps={{
              type: "number",
              startAdornment: (
                <InputAdornment position="start">
                  Set The Quantity You Need :
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
            {...register("totalPrice")}
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
            CheckOut
          </LoadingButton>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Checkout;
