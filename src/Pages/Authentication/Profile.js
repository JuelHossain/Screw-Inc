import { Chip, Container, Divider, Paper, Stack } from "@mui/material";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Fields from "../../Components/Profile/Fields";
import Photo from "../../Components/Profile/Photo";
import Title from "../../Components/Profile/Title";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import { LoadingButton } from "@mui/lab";
import useUser from "../../Hooks/useUser";
import axios from "axios";

const Profile = () => {
  const { user1, userLoading, refetchUser } = useUser();
  const [selected, setSelected] = useState(false);
  const [fetching, setfetching] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const key = "07f19fbb34b923c7d9b27b1f5fd52764";
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isDirty },
  } = useForm();

  const photolength = watch("photoURL")?.length > 0;
  useEffect(() => {
    if (photolength) {
      setSelected(true);
    }
  }, [selected, photolength]);

  const onSubmit = async (data) => {
    console.log(data);
    const image = data.photoURL[0];
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
            axios
              .put(`users/${user1.email}`, { photoURL: data.data.url })
              .then((res) => {
                if (res.data.result.acknowledged) {
                  setSubmitted(true);
                  refetchUser();
                  setfetching(false);
                }
              });
          }
        })
        .catch((error) => {
          setfetching(false);
          console.log(error);
        });
    } else if (isDirty) {
      await axios
        .put(`users/${user1.email}`, {
          phoneNumber: data?.PhoneNumber,
          displayName: data?.name ? data?.name : user1.displayName,
          address: data?.Address,
        })
        .then((res) => {
          if (res.data.result.acknowledged) {
            setSubmitted(true);
            refetchUser();
          }
        });
    }
    setSelected(false);
    setTimeout(async () => {
      setSubmitted(false);
    }, 3000);
  };

  if (userLoading) {
    return <Loading />;
  } else {
    const {
      displayName,
      email,
      phoneNumber,
      address,
      emailVerified,
      admin,
      photoURL,
    } = user1 ?? {};
    return (
      <Container
        component={"main"}
        maxWidth={"sm"}
        sx={{ my: 10, position: "relative" }}
      >
        <Chip
          label={admin ? "Admin" : "User"}
          color="primary"
          sx={{ top: 0, right: 0 }}
        />
        <Paper
          sx={{ m: "10", p: "10px", display: "flex", flexDirection: "column" }}
        >
          <Stack direction="row" position={'relative'}>
            <Photo
              photo={photoURL}
              size="150px"
              register={register}
              selected={selected}
            />
            <Title value={displayName} register={register} />
            {errors.name&&<p className="absolute bottom-10 right-10 text-red-500">{errors?.name?.message}</p>}
          </Stack>
          <Divider />
          <Fields value={email} register={register} label={"Email"} readOnly />
          <Fields
            value={phoneNumber}
            register={register}
            label={"PhoneNumber"}
          />
          <Fields value={address} register={register} label={"Address"} />
          <Stack sx={{ position: "relative" }}>
            <Fields
              value={
                emailVerified ? "You Are Verified" : "You Are Not Verified"
              }
              register={register}
              label={"Verified"}
              readOnly
              disabled
            />
            {!emailVerified && (
              <LoadingButton
                sx={{ position: "absolute", right: 25, bottom: 16 }}
                loading={sending}
                label="Clickable"
                onClick={ () => {
                   sendEmailVerification();
                 setSent(true);
                  setTimeout(() => setSent(false), 3000);
                }}
              >
                {sent ? "Sent" : "Send Verification"}
              </LoadingButton>
            )}
          </Stack>
          <LoadingButton
            type="submit"
            onClick={handleSubmit(onSubmit)}
            loading={fetching}
            variant="contained"
            sx={{ ml: 38, mr: 1, my: 1, p: 1 }}
          >
            {submitted ? "Information Updated" : "Update Information"}
          </LoadingButton>
        </Paper>
      </Container>
    );
  }
};
export default Profile;
