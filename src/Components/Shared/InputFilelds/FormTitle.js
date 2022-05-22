import { Avatar, Typography } from '@mui/material';
import React from 'react';

const FormTitle = ({title,icon}) => {
    return (
      <>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {icon}
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </>
    );
};

export default FormTitle;