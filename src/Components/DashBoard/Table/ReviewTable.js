import { Edit, Star } from "@mui/icons-material";
import {
  Chip,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase";
import useAdmin from "../../../Hooks/useAdmin";
import Toast from "../../Shared/Alert";
import Confirm from "../../Shared/Confirm";
import Loading from "../../Shared/Loading";

export default function ReviewTable({
  reviews,
  reviewsLoading,
  reviewError,
  refetchReviews,
}) {
  const navigate = useNavigate();
  const [admin, adminLoading] = useAdmin();
  const [deleteError, setDeleteError] = useState(false);
  // getting all orders from data base

  //open confirm button when deleting a order.
  const [confirm, setConfirm] = useState(false);
  //order id to delete
  const [reviewId, setReviewId] = useState("false");
  const handleDelete = () => {
    axios
      .delete(`/reviews/${reviewId}`)
      .then((res) => {
        res.data.acknowledged && refetchReviews();
        return res.data;
      })
      .catch((err) => setDeleteError(err));
  };

  if (reviewsLoading || adminLoading) {
    return <Loading />;
  } else if (reviewError || deleteError) {
    if (
      reviewError?.response?.status === 403 ||
      reviewError?.response?.status === 401
    ) {
      setTimeout(() => signOut(auth), 4000);
      localStorage.removeItem("accessToken");
      return (
        <Toast
          open={true}
          setOpen={setTimeout(() => false, 1000)}
          message={
            "You Are Not Authorized Here. You are going to signed out soon "
          }
        />
      );
    } else {
      return (
        <Toast
          open={true}
          setOpen={setTimeout(() => false, 1000)}
          message="Server Side Error Dont Worry"
        />
      );
    }
  }

  return (
    <div>
      <TableContainer component={Paper} sx={{ position: "relative" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">Review</TableCell>
              {!admin && <TableCell align="center">Edit</TableCell>}
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {reviews.map((review) => {
              const { userPhoto, userName, reviewStar, reviewLabel, _id } =
                review;
              return (
                <TableRow
                  key={_id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      className="w-8 h-8 object-cover"
                      src={userPhoto}
                      alt=""
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {userName}
                  </TableCell>
                  <TableCell align="center">
                    <Rating
                      readOnly
                      sx={{ fontSize: "30px" }}
                      name="hover-feedback"
                      value={reviewStar}
                      precision={0.5}
                      emptyIcon={
                        <Star style={{ opacity: 0.55 }} fontSize="inherit" />
                      }
                    />
                  </TableCell>
                  <TableCell align="center">
                    {reviewLabel ? reviewLabel : ""}
                  </TableCell>
                  {!admin&&<TableCell align="center">
                    <Chip
                      icon={<Edit />}
                      label={"Edit"}
                      onClick={() => {
                        navigate(`/editReview/${_id}`);
                      }}
                    />
                  </TableCell>}

                  <TableCell align="center">
                    <Chip
                      onClick={() => {
                        setConfirm(true);
                        setReviewId(_id);
                      }}
                      label={"Delete"}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Confirm
        open={confirm}
        setOpen={setConfirm}
        title="Are You Sure ?"
        text={
          admin
            ? "If You Delete The Order . The Order Will Delete from the customer End too. "
            : "If You Delete The Order , You may have to Order Again"
        }
        falsy="No"
        truthy="Yes"
        agreed={() => handleDelete()}
      />
    </div>
  );
}
