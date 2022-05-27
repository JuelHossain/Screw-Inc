import { Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import DenseTable from '../../Components/Shared/Table';

const Users = () => {
    return (
      <>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ my: 4 }}>
          <Typography variant="h5" fontWeight={500} mb="20px">
            Manage Users
          </Typography>
          <DenseTable />
        </Container>
      </>
    );
};

export default Users;