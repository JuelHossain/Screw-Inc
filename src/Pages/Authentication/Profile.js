
import {

  Chip,
  Container,
  Divider,

  Paper,
  Stack,
} from "@mui/material";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Fields from "../../Components/Profile/Fields";
import Photo from "../../Components/Profile/Photo";
import Title from "../../Components/Profile/Title";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import { LoadingButton } from "@mui/lab";
import useAdmin from "../../Hooks/useAdmin";
const Profile = () => {
  const [selected, setSelected] = useState(false);
  const [fetching, setfetching] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const key = "07f19fbb34b923c7d9b27b1f5fd52764";
  const { register, handleSubmit, watch } = useForm();
  const photolength = watch("photoURL")?.length > 0;
  useEffect(() => {
    if (photolength) {
      setSelected(true);
    }
  }, [selected, photolength]);
  const onSubmit = async (data) => {
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
            console.log(data.data.url);
            setPhotoURL(data.data.url);
            setfetching(false);
          }
        })
        .catch((error) => {
          setfetching(false);
          console.log(error);
        });
    }
    await updateProfile({
      displayName:data.name,
      photoURL: photoURL,
    });
    await setSubmitted(true);
    await setSelected(false);
    setTimeout(async () => {
      await setSubmitted(false);
    }, 3000);
  };
  const [admin, adminLoading] = useAdmin();
  if (loading||adminLoading) {
    return <Loading />;
  } else if (updateError) {
    console.log(updateError);
  }
  return (
    <Container component={"main"} maxWidth={"sm"} sx={{ my: 10, position: 'relative' }}>
      <Chip label={admin ? 'Admin' : 'User'} color='primary' sx={{ top:0 ,right:0}}/>
      <Paper
        sx={{ m: "10", p: "10px", display: "flex", flexDirection: "column" }}
      >
        <Stack direction="row">
          <Photo
            photo={user.photoURL}
            size="150px"
            register={register}
            selected={selected}
          />
          <Title value={user.displayName} register={register} />
        </Stack>
        <Divider />
        <Fields
          value={user.email}
          register={register}
          label={"Email"}
          readOnly
        />
        <Fields
          value={user.phoneNumber}
          register={register}
          label={"PhoneNumber"}
        />
        <Fields
          value={user?.address}
          register={register}
          label={"Address"}
          type="address"
        />
        <Stack sx={{ position: "relative" }}>
          <Fields
            value={
              user.emailVerified ? "You Are Verified" : "You Are Not Verified"
            }
            register={register}
            label={"Verified"}
            readOnly
            disabled
          />
          {user.emailVerified && (
            <LoadingButton
              sx={{ position: "absolute", right: 25, bottom: 16 }}
              loading={sending}
              label="Clickable"
              onClick={async () => {
                await sendEmailVerification();
                await setSent(true);
                setTimeout(async () => await setSent(false), 3000);
              }}
            >
              {sent ? "Sent" : "Send Verification"}
            </LoadingButton>
          )}
        </Stack>
        <LoadingButton
          type="submit"
          onClick={handleSubmit(onSubmit)}
          loading={updating || fetching}
          variant="contained"
          sx={{ ml: 38, mr: 1, my: 1, p: 1 }}
        >
          {submitted ? "Information Updated" : "Update Information"}
        </LoadingButton>
      </Paper>
    </Container>
  );
};
export default Profile;
