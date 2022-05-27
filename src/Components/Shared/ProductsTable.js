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
import { Chip, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import {
  AdminPanelSettingsRounded,
  Paid,
  Payment,
  VerifiedUser,
} from "@mui/icons-material";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import Confirm from "./Confirm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin";
import useProducts from "../../Hooks/useProducts";
import { set, useForm } from "react-hook-form";
export default function ProductsTable() {
  const navigate = useNavigate();
  const [admin, adminLoading] = useAdmin();
  const [isError, setIsError] = React.useState(false);
  const [deleteError, setDeleteError] = React.useState(false);
  // getting all products from data base
  const { products, productsLoading, productsError, refetchProducts } =
    useProducts();
  //open confirm button when deleting a order.
  const [confirm, setConfirm] = React.useState(false);
  //order id to delete
  const [orderId, setOrderId] = React.useState("false");
  const handleDelete = (id) => {
    axios
      .delete(`/products/${id}`)
      .then((res) => {
        res.data.acknowledged && refetchProducts();
        return res.data;
      })
      .catch((err) => setDeleteError(err));
  };

  if (productsLoading || adminLoading) {
    return <Loading />;
  } else if (productsError || isError || deleteError) {
    if (
      productsError?.response?.status === 403 ||
      productsError?.response?.status === 401 ||
      isError ||
      deleteError
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
              <TableCell alignt="left">Photo</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products?.map((product) => {
              const { photoURL, photoUrl, upPhoto, name, price, qty, _id } =
                product;
              console.log(_id);
              return (
                <TableRow
                  key={_id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  {/* cell 1 */}
                  <TableCell component="th" scope="row">
                    <img
                      className="w-8 h-8 object-cover"
                      src={photoURL || upPhoto || photoUrl}
                      alt=""
                    />
                  </TableCell>
                  {/* cell 2  */}

                  <TableCell component="th" scope="row">
                    {name}
                  </TableCell>

                  {/* cell 3  */}
                  <TableCell align="right">
                    <OutlinedInput
                      type="number"
                      min={0}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value < 0) {
                          value = 0;
                        }
                        if (_id) {
                          axios
                            .put(`/products/${_id}`, {
                              price: value,
                            })
                            .then((res) => {
                              if (res.data.acknowledged) {
                                refetchProducts();
                              }
                            });
                        }
                      }}
                      sx={{ height: "35px", width: "150px" }}
                      defaultValue={price}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">Taka</InputAdornment>
                      }
                    />
                  </TableCell>
                  {/* cell 4  */}
                  <TableCell align="right">
                    <OutlinedInput
                      type="number"
                      min={0}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (value < 0) {
                          value = 0;
                        }
                        if (_id) {
                          axios
                            .put(`/products/${_id}`, {
                              qty: value,
                            })
                            .then((res) => {
                              if (res.data.acknowledged) {
                                refetchProducts();
                              }
                            });
                        }
                      }}
                      sx={{ height: "35px", width: "150px" }}
                      defaultValue={qty}
                      id="outlined-adornment-weight"
                      endAdornment={
                        <InputAdornment position="end">pcs</InputAdornment>
                      }
                    />
                  </TableCell>
                  {/* cell 5  */}
                  <TableCell align="center">
                    <Chip
                      onClick={() => {
                        navigate(`/products/${_id}`);
                      }}
                      label={"Edit"}
                    />
                  </TableCell>
                  {/* cell 6  */}
                  <TableCell align="right">
                    <Chip
                      onClick={() => {
                        setConfirm(true);
                        setOrderId(_id);
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
        agreed={() => handleDelete(orderId)}
      />
    </div>
  );
}
