import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Loading from "./Loading";
import Toast from "./Alert";
import { Chip } from "@mui/material";
import {
  Paid,
  Payment,
} from "@mui/icons-material";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";
export default function OrdersTable({orders,ordersLoading,refetchOrders,ordersError}) {
  const navigate = useNavigate();
  const [admin, adminLoading] = useAdmin();
  const [isError, setIsError] = React.useState(false);
  const [deleteError, setDeleteError] = React.useState(false);
  const [paid, setPaid] = React.useState(false);
  // getting all orders from data base
  
  //open confirm button when deleting a order.
  const [confirm, setConfirm] = React.useState(false);
  //order id to delete
  const [orderId, setOrderId] = React.useState("false");
  const makeOrderShipped = (orderId) => {
    axios
      .put(`/orders/${orderId}`, { shipped: true })
      .then((res) => {
        res.data.acknowledged && refetchOrders();
        return res.data;
      })
      .catch(() => setIsError(true));
  };
  
  const handleDelete = () => {
    if (!paid) {
      axios
        .delete(`/orders/${orderId}`)
        .then((res) => {
          res.data.acknowledged && refetchOrders();
          return res.data;
        })
        .catch((err) => setDeleteError(err));
    } else {
      toast.warn('You Cannot Delete Your Order Because It is already paid.  Thanks')
    }
  };

  if (ordersLoading||adminLoading) {
    return <Loading />;
  } else if (ordersError || isError || deleteError) {
    if (
      ordersError?.response?.status === 403 ||
      ordersError?.response?.status === 401
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
              <TableCell>User Name</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total Price</TableCell>
              <TableCell align="right">Payment Status</TableCell>
              <TableCell align="right">Shipping Status</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders?.map((order) => {
              const { paid, productName,totalPrice, qty, userName, _id, shipped } = order;
              return (
                <TableRow
                  key={_id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {userName}
                  </TableCell>
                  <TableCell align="right">{productName}</TableCell>
                  <TableCell align="right">{qty}</TableCell>
                  <TableCell align="right">{totalPrice}</TableCell>
                  <TableCell align="center">
                    {admin ? (
                      <Chip
                        icon={paid ? <Paid /> : <Payment />}
                        label={paid ? "Paid" : "UnPaid"}
                      />
                    ) : (
                      <Chip
                        icon={paid ? <Paid /> : <Payment />}
                        label={paid ? "Paid" : "Pay"}
                        onClick={() => {
                          paid || navigate(`/payment/${_id}`);
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {admin ? (
                      <Chip
                        onClick={() => {
                          if (!shipped) {
                            paid
                              ? makeOrderShipped(_id)
                              : toast.error(
                                  "You Can Not Make This order shipped Because Its Not paid yet."
                                );
                          }
                        }}
                        color={shipped ? "default" : "error"}
                        label={shipped ? "shipped" : "ship"}
                      />
                    ) : (
                      <Chip
                        onClick={() => {
                          if (!shipped) {
                            !paid
                              ? toast.error(
                                  "Please Pay To Confirm The Order, Then We will ship Your Order as soon as possible"
                                )
                              : toast.error(
                                  "We Will Shipp Your Order As Soon as Possible Please Be Patience"
                                );
                          }
                        }}
                        color={shipped ? "default" : "error"}
                        label={shipped ? "shipped" : "Not Shipped"}
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Chip
                      onClick={() => {
                        setConfirm(true);
                        setOrderId(_id);
                        setPaid(paid);
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
