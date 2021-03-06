import { Google } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button, Container, CssBaseline,
  Grid, Paper, Stack
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Copyright from "../../Components/Footer/CopyRight";
import ConfirmPasswordInput from "../../Components/Shared/InputFilelds/ConfirmPassword";
import EmailInput from "../../Components/Shared/InputFilelds/EmailInput";
import FormControl from "../../Components/Shared/InputFilelds/FormControl";
import FormTitle from "../../Components/Shared/InputFilelds/FormTitle";
import NameInput from "../../Components/Shared/InputFilelds/NameInput";
import PasswordInput from "../../Components/Shared/InputFilelds/PasswordInput";
import ShowError from "../../Components/Shared/ShowError";
import auth from "../../firebase";
import useToken from "../../Hooks/useToken";
import Terms from "./Terms";

export default function Register() {
  //react firebase hooks
  // create user 
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // create google user
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  //update profile 
  const [updateProfile, updating, upError] = useUpdateProfile(auth);

  // terms and conditions agree or not
  const [agreed, setAgreed] = useState(true);

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors,isSubmitSuccessful},
  } = useForm();

  // handle form submit
  const onSubmit = async (data) => {
    const displayName = data.firstName +" "+ data.lastName;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password, {
      sendEmailVerification: true,
    });
      await updateProfile({ displayName,roll:user });
  };
  //show error state
  const [open, setOpen] = useState(false);
  //opening terms and conditions
  const [termsOpen, setTermsOpen] = useState(false);
 // navigate to the home page after registering
  const navigate = useNavigate();

  //usetoken 
   const [isPosted, tError] = useToken(isSubmitSuccessful ? user : gUser);
  useEffect(() => {
    if (isPosted) {
      navigate('/');
      window.location.reload();
    } else if (error || gError || upError||tError) {
       setOpen(true);
       signOut(auth);
       localStorage.removeItem("accessToken");
       setTimeout(() => {
         setOpen(false);
       }, 3000);
       window.location.reload();
    }
  },[error,gError,user,gUser,upError,navigate,tError,isPosted])
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper sx={{ p: 1, mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormTitle title="Register" icon={<LockOutlinedIcon />} />
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
            <ConfirmPasswordInput
              register={register}
              errors={errors}
              passwordValue={watch("password")}
            />
            <FormControl
              agreed={agreed}
              setAgreed={setAgreed}
              setTermsOpen={setTermsOpen}
            />
            <Terms open={termsOpen} setOpen={setTermsOpen} />
            <ShowError
              sx={{ justifyContent: "end" }}
              open={open}
              setOpen={setOpen}
              error={error || gError || upError || tError}
            />
            {/* sign in button  */}
            <LoadingButton
              loading={loading || updating}
              disabled={agreed}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            {/* google button  */}
            <LoadingButton
              loading={gLoading}
              onClick={() => {
                reset();
                signInWithGoogle();
              }}
              fullWidth
              variant="contained"
              sx={{ display: "flex", gap: 1 }}
            >
              {" "}
              <Google /> Sign In With Google
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button size="small" sx={{ textTransform: "initial" }}>
                  <Link to="/login">Already have an account? Login</Link>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
