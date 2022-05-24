import { Container } from '@mui/material';
import React from 'react';
import MiniDrawer from '../../Components/DashBoard/Drawer';

const DashBoard = () => {
    return (
       <Container maxWidth='xl'>
            <MiniDrawer/>
        </Container>
    );
};

export default DashBoard;