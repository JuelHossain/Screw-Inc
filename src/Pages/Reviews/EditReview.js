import { Star } from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import Loading from "../../Components/Shared/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";
import useReview from "../../Hooks/useReview";
import { useParams } from "react-router-dom";
const EditReview = () => {
    const { id } = useParams();
    const { review, reviewLoading, reviewError, refetchReview } = useReview(id);

    const { userName, userPhoto, _id, reviewText, reviewStar } = review ?? {};
        console.log(reviewText, "this is review");
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const [admin, adminLoading] = useAdmin();
  const [user, userLoading] = useAuthState(auth);
  console.log(reviewStar);
    const [value, setValue] = useState(reviewStar&&reviewStar);
    console.log(value,'this is value');
  const [text, setText] = useState(reviewText&&reviewText);
  console.log(text);
  const [hover, setHover] = React.useState(-1);
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const editreview = () => {
    if (user) {
      const userName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;
      const reviewStar = value;
      const reviewText = text;
      const reviewLabel = getLabelText();
      const newReview = {
        userName,
        userEmail,
        userPhoto,
        reviewStar,
        reviewLabel,
        reviewText,
      };
      if (admin) {
        toast("You are a Admin You are not allowed to Give a Rating");
      } else {
        axios.put(`/reviews/${id}`, newReview).then((res) => {
          if (res.data.acknowledged) {
            toast.success("ooh,You Have Edited Your Review Thank You.");
          }
        });
      }
    }
  };
  if (userLoading) {
    return <Loading />;
  }
  return (
    <Container maxWidth="md" sx={{my:8}}>
      <Typography variant="h6">Please Edit The  Review About Us.</Typography>
      <Divider />
      <Box sx={{ position: "relative" }}>
        <TextField
          onBlur={(e) => {
            setText(e.target.value);
                  }}
                  defaultValue={reviewText}
                  autoFocus
          label="Say Something about Us here"
          variant="filled"
          multiline
          rows="4"
          fullWidth
        />
        <Button
          sx={{ position: "absolute", bottom: -50, right: 4 }}
          variant="outlined"
          onClick={editreview}
        >
          {" "}
          Edit
        </Button>
      </Box>
      <Box
        sx={{
          width: 400,
          fontSize: "20px",

          display: "flex",
          alignItems: "center",
          mt: 1.5,
          ml: 2,
        }}
      >
        <Rating
          sx={{ fontSize: "30px" }}
          name="hover-feedback"
          defaultValue={reviewStar}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </Container>
  );
};

export default EditReview;
