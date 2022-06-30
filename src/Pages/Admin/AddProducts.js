
import { LoadingButton } from '@mui/lab';
import { Box, Container, Divider, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import addIllu from "../../assets/screw driver robot.png";
const AddProducts = () => {
    const [fetching, setfetching] = useState(false);
    const [upPhoto, setUpPhoto] = useState("");
    const key = "07f19fbb34b923c7d9b27b1f5fd52764";
  const {reset, register, handleSubmit, formState: { errors } } = useForm();
    const onsubmit = async (data) => {
         const image = data.photo[0] || null
    if (image) {
      setfetching(true);
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
            setUpPhoto(data.data.url);
            setfetching(false);
          }
        })
        .catch((error) => {
          setfetching(false);
        });
      }
      setfetching(true)
      const photo = () => {
        if (data.photoURL) {
          return data.photoURL
        } else {
          return upPhoto
        }
      }
        const product = {...data,photoURL:photo()}
      await axios.post('/products', product).then(res => {
        if (res.data.acknowledged) {
          reset();
          setfetching(false);
          toast.success('Product Added Successfully')
        }
      }).catch(err => setfetching(false));
  }
  
    return (
      <Container maxWidth={"xl"}>
        <Box sx={{ display: {md:'flex'} ,gap:1,mt:8}}>
          <Paper
            sx={{
              display:{xs:'none',sm:'block'},
              flex: 1,
              textAlign: "center",
              p: 1,
            }}
          ><img className='w-full h-full object-cover rounded-md' src={addIllu} alt="" />

          </Paper>
          <Paper
            sx={{
              flex: 1,

              textAlign: "center",
              p: 1,
            }}
          >
            <Typography
              fontSize={29}
              fontWeight="bold"
              color={"primary"}
              mb={1}
            >
              Add A Product
            </Typography>
            <Box component={"form"} onSubmit={handleSubmit(onsubmit)}>
              <TextField
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name Is Required",
                  },
                })}
                fullWidth
                error={Boolean(errors?.name)}
                helperText={errors?.name?.message}
                placeholder="Tools Name"
                sx={{ mb: 1 }}
              />
              <TextField
                error={Boolean(errors?.price)}
                helperText={errors?.price?.message}
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price Required",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Only Number is allowed",
                  },
                })}
                fullWidth
                placeholder="Price"
                sx={{ mb: 1 }}
              />
              <TextField
                {...register("qty", {
                  required: {
                    value: true,
                    message: "Quantity Required",
                  },
                  valueAsNumber: {
                    value: true,
                    message: "Only Number is allowed",
                  },
                })}
                error={Boolean(errors?.qty)}
                helperText={errors?.qty?.message}
                fullWidth
                placeholder="Quantity"
                sx={{ mb: 1 }}
              />
              <TextField
                {...register("text")}
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

export default AddProducts;