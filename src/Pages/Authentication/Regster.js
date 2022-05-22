import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import Copyright from "../../Components/Footer/CopyRight";
import { useForm } from "react-hook-form";
import FormTitle from "../../Components/Shared/InputFilelds/FormTitle";
import NameInput from "../../Components/Shared/InputFilelds/NameInput";
import EmailInput from "../../Components/Shared/InputFilelds/EmailInput";
import PasswordInput from "../../Components/Shared/InputFilelds/PasswordInput";
import {Container, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Google } from "@mui/icons-material";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";

export default function Register() {
   const [signInWithGoogle, gUser, gLoading, gError] =
     useSignInWithGoogle(auth);
  const [agreed, setAgreed] = useState(false);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: onchange });
  const onSubmit = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const displayName = firstName + lastName;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    console.log(displayName);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormTitle title="Signup" icon={<LockOutlinedIcon />}></FormTitle>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Stack direction={"row"} spacing={1}>
            <NameInput
              register={register}
              errors={errors}
              name="firstName"
              label="First Name"
              autoFocus
            />
            <NameInput
              register={register}
              errors={errors}
              name="lastName"
              label="Last Name"
            />
          </Stack>
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label={
              <Typography>
                I Agree to The{" "}
                <Link
                  to={"/termsandconditions"}
                  className="underline-offset-2 underline"
                >
                  Terms And Conditions
                </Link>
              </Typography>
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {/* google button  */}
          <Button
            onClick={() => signInWithGoogle()}
            fullWidth
            variant="contained"
            sx={{ display: "flex", gap: 1 }}
          >
            {" "}
            <Google /> Sign In With Google
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button size="small" sx={{ textTransform: "initial" }}>
                <Link to="/login">Already have an account? Sign in</Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
