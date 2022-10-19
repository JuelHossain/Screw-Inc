import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useHeader } from "../../context/HeaderContext";
import useUser from "../../Hooks/useUser";
import Loading from "../Shared/Loading";

const UserAvatar = () => {
  const { openUserMenu } = useHeader();
  const { user, userLoading } = useUser();

  if (userLoading) {
    return <Loading />;
  }
  return (
    <Tooltip title="Open settings">
      <IconButton onClick={openUserMenu}>
        <Avatar alt={user?.displayName} src={user?.photoURL} />
      </IconButton>
    </Tooltip>
  );
};

export default UserAvatar;
