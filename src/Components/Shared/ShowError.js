import { Close, Error } from '@mui/icons-material';
import {Box, Collapse, IconButton } from '@mui/material';
import React from 'react';

const ShowError = ({open,setOpen,error,...props}) => {
    return (
      <Collapse
        {...props}
        in={open}>
        <Box
                sx={{
              textTransform:'capitalize',
            color: "error.main",
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <Error />
          {error?.message.slice(22, -2)}
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
        </Box>
      </Collapse>
    );
};

export default ShowError;