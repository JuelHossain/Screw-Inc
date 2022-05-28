import { Container, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import ReviewTable from "../../Components/DashBoard/Table/ReviewTable";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";
import useReviews from "../../Hooks/useReviews";

const ManageReviews = () => {
    const { reviews, reviewsLoading, reviewsError, refetchReviews } = useReviews();
  if (reviewsLoading) {
    return <Loading />;
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight={500} mb="20px">
         Manage Reviews
        </Typography>
        <ReviewTable
          reviews={reviews}
          reviewsLoading={reviewsLoading}
          reviewsError={reviewsError}
          refetchReviews={refetchReviews}
        />
      </Container>
    </>
  );
};

export default ManageReviews
