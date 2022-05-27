import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import {
  Box,
  Container,
  Divider,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const EditProduct = () => {

    const { id } = useParams();
    // products
    const { product, productLoading, refetchProduct } = useProduct(id);
    // destructured product
    const { photoURL, photoUrl, upPhoto, name, price, qty, text } = product ?? {};
    console.log(text)
    // uploaded photo here 
    const [editedPhoto, setEditedPhoto] = useState("");
    // for button loading management 
    const [fetching, setFetching] = useState(false);
    // image bb key 
    const key = "07f19fbb34b923c7d9b27b1f5fd52764";
    // useform hook very bad hooks 
  const {
    register,
      handleSubmit,
    reset,
  } = useForm();
    
    // product is loading
  const onsubmit = async (data) => {
    console.log(data);
    const image = data.photo[0] || null;
      if (image) {
          setFetching(true);
      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${key}`;
      await fetch(url, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log(data.data.url);
            setEditedPhoto(data.data.url);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }setFetching(true);
    const newProduct = { ...data, upPhoto: editedPhoto };
      await axios.put(`/products/${id}`, newProduct).then((res) => {
          if (res.data.acknowledged) {
              console.log(res.data);
              refetchProduct();
              toast.success("Product Added Successfully");
              setFetching(false);
          }
      }).catch(error => setFetching(false));
  };
    if (productLoading) {
        reset();
        return <Loading />;
        
    }
  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ display: { md: "flex" }, gap: 1, mt: 8 }}>
        <Paper
          sx={{
            display: { xs: "none", sm: "block" },
            flex: 1,
            textAlign: "center",
            p: 1,
          }}
        >
          <img
            className="w-full h-full object-cover rounded-md"
            src={upPhoto || photoURL || photoUrl}
            alt=""
          />
        </Paper>
        <Paper
          sx={{
            flex: 1,
            textAlign: "center",
            p: 1,
          }}
        >
          <Typography fontSize={29} fontWeight="bold" color={"primary"} mb={1}>
            Edit Product Information
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit(onsubmit)}>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Name:</InputAdornment>
                ),
              }}
              {...register("name")}
              defaultValue={name&&name}
              fullWidth
              placeholder={"Tools Name"}
              sx={{ mb: 1 }}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Price :</InputAdornment>
                ),
              }}
              {...register("price")}
              value={price}
              fullWidth
              placeholder="price"
              sx={{ mb: 1 }}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Quantity:</InputAdornment>
                ),
              }}
              {...register("qty")}
              defaultValue={qty}
              fullWidth
              placeholder="Quantity"
              sx={{ mb: 1 }}
            />
            <TextField
              variant="filled"
              label="description text"
              multiline
              rows={3}
              {...register("text")}
              defaultValue={text}
              fullWidth
              placeholder="Short Description"
              sx={{ mb: 1 }}
            />
            <TextField
              {...register("photo")}
              fullWidth
              placeholder="Add Photo"
              type="file"
              sx={{ mb: 1 }}
            />
            <Divider>Or</Divider>
            <TextField
              {...register("photoURL")}
              defaultValue={photoURL}
              fullWidth
              placeholder="Add A Photo Link"
              sx={{ mb: 1 }}
            />
            <LoadingButton
              loading={fetching}
              type="submit"
              fullWidth
              variant="contained"
            >
              Submit
            </LoadingButton>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EditProduct;
