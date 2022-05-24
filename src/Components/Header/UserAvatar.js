import { Avatar, IconButton, Tooltip } from '@mui/material';
import React from 'react';

const UserAvatar = ({user,openUserMenu}) => {
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