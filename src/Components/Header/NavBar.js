import { Box, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({pages}) => {
    return (
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <NavLink to={page}>{page}</NavLink>
          </Button>
        ))}
      </Box>
    );
};

export default NavBar;