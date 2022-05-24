import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import DenseTable from '../../Components/Shared/Table';

const Users = () => {
    return (
        <>
            <CssBaseline/>
        <Container maxWidth="xl" sx={{my:4 }}>
          <DenseTable />
        </Container>
      </>
    );
};

export default Users;