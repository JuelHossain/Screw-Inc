import { Google } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  Stack
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Copyright from "../../Components/Footer/CopyRight";
import Toast from "../../Components/Shared/Alert";
import EmailInput from "../../Components/Shared/InputFilelds/EmailInput";
import FormTitle from "../../Components/Shared/InputFilelds/FormTitle";
import PasswordInput from "../../Components/Shared/InputFilelds/PasswordInput";
import Fly from "../../Components/Shared/Modal";
import ShowError from "../../Components/Shared/ShowError";
import auth from "../../firebase";
import useToken from "../../Hooks/useToken";

//login Page Component
export default function Login() {
  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // react firebase hooks
  // 1 signing in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // 2 signing in with google 
  const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);

  //handle onsubmit
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  // show error state
  const [open, setOpen] = useState(false);
  //reset password modal state
  const [modalOpen, setModalOpen] = useState(false);
  // show confirmation message of reset email 
    const [alert, setAlert] = useState(false);
  // navigating user to location he came from 
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  //usetoken
  const [isPosted,tError] = useToken(user || gUser);
  useEffect(() => {
    if (isPosted) {
            navigate(from, { replace: true });
       window.location.reload();

     
    } else if (error || tError) {
      setOpen(true);
      signOut(auth);
      localStorage.removeItem('accessToken');
      setTimeout(() => {
        setOpen(false);
        navigate('/');
      }, 3000);
       window.location.reload();

    }
  }, [user,gUser,error,navigate,from,tError,isPosted]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper sx={{p:1,mt:8}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormTitle title={"Login"} icon={<LockOutlinedIcon />} />
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
              <ShowError
                open={open}
                setOpen={setOpen}
                error={error || tError}
              ></ShowError>
            </Stack>

            {/* show confirmation message */}
            <Toast
              open={alert}
              setOpen={setAlert}
              message="Reset Email Sent Successfully"
            />
            {/* login button  */}
            <LoadingButton
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              Sign In
            </LoadingButton>

            {/* google button  */}
            <LoadingButton
              loading={gLoading}
              onClick={() => signInWithGoogle()}
              fullWidth
              variant="contained"
              sx={{ display: "flex", gap: 1 }}
            >
              {" "}
              <Google /> Sign In With Google
            </LoadingButton>

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
                <Fly
                  modal={modalOpen}
                  setModal={setModalOpen}
                  setAlert={setAlert}
                  email={watch("email")}
                ></Fly>
              </Grid>
              <Grid item>
                <Button size="small" sx={{ textTransform: "initial" }}>
                  <Link to="/register">
                    {"Don't have an account? Register"}
                  </Link>
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
