import { Avatar, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import useUser from '../../Hooks/useUser';
import Loading from '../Shared/Loading';

const UserAvatar = ({ openUserMenu }) => {
  const { user1: user, userLoading } = useUser();
  if (userLoading) {
    return<Loading/>
  }
    return (
      <Tooltip title="Open settings">
        <IconButton onClick={openUserMenu}>
          {/* user image here  */}
          <Avatar alt={user?.displayName} src={user?.photoURL} />
        </IconButton>
      </Tooltip>
    );
};

export default UserAvatar;