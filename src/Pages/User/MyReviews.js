import { Container, CssBaseline, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import ReviewTable from "../../Components/DashBoard/Table/ReviewTable";
import Loading from "../../Components/Shared/Loading";
import auth from "../../firebase";

const MyReviews = () => {
 const [user, userLoading] = useAuthState(auth);
 const {
   data,
   isLoading,
   error,
   refetch,
 } = useQuery("MyReviews", () => axios(`/myreviews?email=${user?.email}`),{enabled:!userLoading});
 const myReviews = data?.data;
  if (isLoading||userLoading) {
    return <Loading />;
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Typography variant="h5" fontWeight={500} mb="20px">
          My Reviews
        </Typography>
        <ReviewTable
          reviews={myReviews}
          reviewsLoading={isLoading}
          reviewsError={error}
          refetchReviews={refetch}
        />
      </Container>
    </>
  );
};

export default MyReviews;
