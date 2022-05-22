import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../../Components/Footer/CopyRight";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ShowError from "../../Components/Shared/ShowError";
import Fly from "../../Components/Shared/Modal";
import EmailInput from "../../Components/Shared/InputFilelds/EmailInput";
import PasswordInput from "../../Components/Shared/InputFilelds/PasswordInput";
import { Google } from "@mui/icons-material";

//login Page Component
export default function Login() {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // react firebase hooks
  // 1
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // 2
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  //handle onsubmit
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  // alert open
  const [open, setOpen] = useState(false);
  //modal open
  const [modalOpen, setModalOpen] = useState(false);

  //set open true
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          {/* input fields  */}
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />

          {/* checkbox and firebase error  */}
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            {/* checkbox  */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            {/* show error  */}
            <ShowError open={open} setOpen={setOpen} error={error}></ShowError>
          </Stack>

          {/* login button  */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2,mb:1}}
          >
            Sign In
          </Button>

          {/* google button  */}
          <Button
            onClick={()=>signInWithGoogle()}
            fullWidth
            variant="contained"
            sx={{display:'flex',gap:1}}
          > <Google/>  Sign In With Google
          </Button>

          <Grid container>
            <Grid item xs>
              <Button
                onClick={() => {
                  setModalOpen(true);
                }}
                size="small"
                sx={{ textTransform: "initial" }}
              >
                Reset Password ?
              </Button>
              <Fly modal={modalOpen} setModal={setModalOpen}></Fly>
            </Grid>
            <Grid item>
              <Button size="small" sx={{ textTransform: "initial" }}>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
