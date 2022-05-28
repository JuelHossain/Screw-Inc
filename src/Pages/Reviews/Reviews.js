import { Star } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent, CardMedia, Container, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Loading from "../../Components/Shared/Loading";
import useReviews from "../../Hooks/useReviews";

const Reviews = ({ size }) => {
  const { reviews, reviewsLoading, refetchReviews } = useReviews(size);
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
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  if (reviewsLoading) {
    return <Loading/>
  }
  return (
    <main >
      <Container sx={{ py: 8 }} maxWidth="lg" >
        <Typography variant="h4" textAlign={"center"}>
          Customer Reviews
        </Typography>
        <Divider sx={{ mx: 30, my: 2 }} />
        <Grid container spacing={2}>
          {reviews?.map((r) => {
            const { userName, userPhoto, _id, reviewText, reviewStar } = r;
            console.log(r);

            return (
              <Grid item key={_id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "alliceblue",
                  }}
                >
                  <CardContent sx={{ flexGrow: 0 }}>
                    <Stack sx={{ alignItems: "center" }} spacing={2}>
                      <Avatar
                        alt="userphoto"
                        src={userPhoto}
                        sx={{
                          width: 50,
                          height: 50,
                          textAlign: "end",
                        }}
                      />
                      <Typography
                        variant="h5"
                        color="primary"
                        whiteSpace={"nowrap"}
                      >
                        {userName}
                      </Typography>
                      <Typography height={36} color="secondary">
                        {reviewText}
                      </Typography>
                      <Rating
                        readOnly
                        sx={{ fontSize: "30px" }}
                        name="hover-feedback"
                        value={reviewStar}
                        precision={0.5}
                        getLabelText={getLabelText}
                        emptyIcon={
                          <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                        }
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
              <Divider sx={{ mt:4}} />
      </Container>
    </main>
  );
};

export default Reviews;
