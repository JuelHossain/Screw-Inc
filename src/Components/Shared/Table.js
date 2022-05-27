import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";
import Toast from "./Alert";
import { Chip } from "@mui/material";
import { AdminPanelSettingsRounded, Delete, VerifiedUser } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import Confirm from "./Confirm";

export default function DenseTable() {
  const [currentUser,loading] = useAuthState(auth);
  const [isError, setIsError] = React.useState(false);
  const [deleteError, setDeleteError] = React.useState(false);
  const { data: users, isLoading, error, refetch } = useQuery('users', async () => await axios('/users').then(res => res.data));
  //open confirm button when deleting the user
  const [confirm, setConfirm] = React.useState(false);
  //user email to delete
  const [email, setEmail] = React.useState('');
    const makeAdmin = (email,value) => {
        axios.put(`/users/admin/${email}`, { admin: value }).then(res => {
            res.data.acknowledged && refetch();
            return res.data;
        }).catch(()=>setIsError(true));
    }
    const handleDelete= (email) => {
      axios.delete(`/users/${email}`).then(res => {
        res.data.acknowledged && refetch();
        return res.data;
      }).catch(err => setDeleteError(err));
    }
    
    if (isLoading||loading) {
        return<Loading/>
    } else if (error||isError||deleteError) {
      if (error?.response?.status === 403 || error?.response?.status === 401 || isError || deleteError) {
            setTimeout(() => signOut(auth), 4000);
            localStorage.removeItem('accessToken');
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
              <TableCell>User's Name</TableCell>
              <TableCell align="right">User's Email Address</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">Change Roll</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users?.map(
              (user) =>
                currentUser.email === user.email || (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.displayName}
                    </TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="center">
                      <Chip
                        icon={
                          user.admin ? (
                            <AdminPanelSettingsRounded />
                          ) : (
                            <VerifiedUser />
                          )
                        }
                        label={user.admin ? "Admin" : "User"}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        onClick={() => {
                          makeAdmin(user.email, user.admin ? false : true);
                        }}
                        color={user.admin ? "error" : "default"}
                        label={user.admin ? "Remove Admin" : "Make Admin"}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Chip
                        onClick={() => {
                          setConfirm(true);
                          setEmail(user.email);
                        }}
                        label={"Delete"}
                      />
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Confirm
        open={confirm}
        setOpen={setConfirm}
        title="Are You Sure ?"
        text="If you Delete The User He Will Remain Removed Until logged Back Again. Please Note That If You Remove An Admin Then He will Loss His Admin Role."
        falsy="No"
        truthy="Yes"
        agreed={()=>handleDelete(email)}
      />
    </div>
  );
}
