import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  Divider,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Shared/Loading";
import useProduct from "../../Hooks/useProduct";

const EditProduct = () => {

  const { id } = useParams();

    // products
  const { product, productLoading, refetchProduct } = useProduct(id);
  
    // destructured product
    const { photoURL, name, price, qty, text } = product ?? {};
    // for button loading management 
    const [fetching, setFetching] = useState(false);
    // image bb key 
    const key = "07f19fbb34b923c7d9b27b1f5fd52764";
    // useform hook very bad hooks 
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState:{isDirty}
  } = useForm();
    // product is loading
  const onsubmit = async (data) => {
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
        .then(async(data) => {
          if (data.success) {
           await axios.put(`/products/${id}`, { ...data, photoURL: data.data.url }).then(async res => {
              if (res.data.acknowledged) {
                toast.success("Data Has Been Updated");
                await refetchProduct();
                await setFetching(false);
                await setValue('photoURL', product.photoURL);
              }
            }).catch(err => setFetching(false));
          }
        }).catch(err => setFetching(false));
    } else {
      setFetching(true);
      const photo = () => {
        if (data.photoURL) {
          console.log(data.photoURL)
          return data.photoURL
        } else {
          return product.photoURL
        }
      }
      await axios.put(`/products/${id}`, {...data,photoURL:photo()}).then(async (res) => {
        if (res.data.acknowledged) {
          toast.success("Product Edited Successfully");
         await  setFetching(false);
         await refetchProduct();
        }
      }).catch(error => setFetching(false));
    }
  };
  useEffect(() => {
    reset()
  },[product,reset,])
    if (productLoading) {
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
            src={photoURL}
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
                          defaultValue={name}
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
              defaultValue={price}
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
              fullWidth
              placeholder="Add A Photo Link"
              sx={{ mb: 1 }}
            />
            <LoadingButton
              disabled={!isDirty}
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
