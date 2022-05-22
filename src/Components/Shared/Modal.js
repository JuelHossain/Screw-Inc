import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm, useFormState } from "react-hook-form";
import auth from "../../firebase";
import ShowError from "./ShowError";

const Fly = ({ modal, setModal, setAlert,email }) => {
  // show firebase error
  const [open, setOpen] = useState(false);
  // react-firebase hooks
  const [sendPasswordResetEmail, sending, sendError] =
    useSendPasswordResetEmail(auth);
  // modal form hook
  const {
    register,
    handleSubmit,
    control,
  } = useForm();
  const { errors,isSubmitSuccessful } = useFormState({
    control,
  }); 

  // showing a message on sent

  //handle onsend
  const onSend = async (data) => {
    const email = data.resetEmail;
    await sendPasswordResetEmail(email);
  }
    //show error state
    useEffect(() => {
      if (sendError) {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 3000);
      } else if(isSubmitSuccessful) {
        setTimeout(() => {
          setModal(false);
          setAlert(true);
        }, 500);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }
    }, [sendError, setModal, setAlert, isSubmitSuccessful]);
    return (
      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ShowError open={open} setOpen={setOpen} error={sendError}></ShowError>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              {...register("resetEmail", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email Must Be Valid",
                },
              })}
              error={Boolean(errors.resetEmail)}
              helperText={errors.resetEmail?.message}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              defaultValue={email}
            />

            <LoadingButton
              onClick={handleSubmit(onSend)}
              endIcon={<Send />}
              loading={sending}
              loadingPosition="end"
              variant="contained"
              fullWidth
            >
              Send Reset Email
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    );
  };
export default Fly;
