
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Copyright from "../../Components/Footer/CopyRight";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { Alert, Collapse, FormHelperText, IconButton, InputAdornment, Snackbar, Stack } from "@mui/material";
import { Close, Error, Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import ShowError from "../../Components/Shared/ShowError";
import Fly from "../../Components/Shared/Modal";
export default function Login() {
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();

  // react firebase hooks
  const [signInWithEmailAndPassword, user, loading, error,] =
    useSignInWithEmailAndPassword(auth);
 
  
  //handle onsubmit
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  //show password state
  const [showPassword, setShowPassword] = useState(false);
  
  // alert open 
  const [open, setOpen] = useState(false);
  //modal open
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  },[error])
  
  
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
          <TextField
            {...register("email", {
              required: {
                value: true,
                message: "Email Is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Email Must Be Valid",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            margin="normal"
            required
            fullWidth
            label="Email Address"
          />
          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Password Is Required",
              },
              minLength: {
                value: 6,
                message: "Password Should At Least 6 Character",
              },
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ShowError open={open} setOpen={setOpen} error={error}></ShowError>
          </Stack>
          <Button
            type="submit"
            name='submit'
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
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
